import mongoose from 'mongoose';
import userModel from '../model/user-model.js'
import followModel from '../model/userFollow.model.js'
export async function userSearch(req, res) {
    let { queryData } = req.query;
    let { id } = req.user   // this string id

    let Id = new mongoose.Types.ObjectId(id) // convert mongodb Id

    const user = await userModel.aggregate([
        {
            $search: {
                index: 'user_search_feature',
                autocomplete: {
                    query: queryData,  /*Search user in cuurent collection(userModel)*/
                    path: 'username',
                }
            }
        },
        {
            $lookup: {
                from: "follows",     // yai direct collection  mai name  utha leta hai
                as: "followData",
                let: { searchUser: "$_id" }, //kyoki ham follwee ko search kar rhe hai or usme ham id rakh rhe hai to hame id sai hi compare karna hoga na ya baad bala code hai after search ka  /* Only we want search users // jo ma search karunga uski id sai compare karo*/
                pipeline: [
                    {
                        $match: {
                            $expr: {  // field vs field comparsion
                                $and: [
                                    { $eq: ["$follower", Id] },    /*Login user*/
                                    { $eq: ["$followee", "$$searchUser"] } 
                                ]
                            }
                        }
                    }
                ]
            }
        },
        {
            $addFields: {
                followstatus: {        /* add field follow data*/
                    $cond: {
                        if: { $lt: [{ $size: "$followData" }, 1] },
                        then: null,
                        else: {
                            $cond: {
                                if: {
                                    $eq: [
                                        { $arrayElemAt: ["$followData.status", 0] },   // // "pending" hua to "requested"
                                        "pending"            //  uske alawa "following"
                                    ]                        // to "accepted" save hote hi "following" dikhne lagega.
                                },
                                then: "requested",
                                else: "following"
                            }
                        }
                    }
                }
            }
        },
        {
            $project: {
                username: 1,
                fullname: 1,
                profileImage: 1,
                followstatus: 1,    /*Jo data chaiye ya nahi chaiye apk output mai*/
            }
        }
    ])

    return res.status(201).json({
        message: "user have a found",
        user
    })
}

export async function followUser(req, res) {
    let { userId } = req.params
    let currentUserId = req.user.id

    let userExits = await userModel.findById(userId)

    if (!userExits) {
        return res.status(401).json({
            message: "User not found",
            success: false
        })
    }

    if (userId === currentUserId) {
        return res.status(401).json({
            message: "User can't follow Yourself",
            success: false
        })
    }

    let alreadyFollow = await followModel.findOne({
        follower: currentUserId,
        followee: userId
    })

    if (alreadyFollow) {
        return res.status(401).json({
            message: "User already follow this user",
            success: false
        })
    }

    let follow = await followModel.create({
        follower: currentUserId,
        followee: userId
    })

    res.status(201).json({
        message: "Follow user find",
        follow
    })

}

export async function followReq(req, res) {
    let { id } = req.user

    let data = await followModel.find({
        followee: id,
        status: "pending"
    }).populate("follower", "username profileImage")

    return res.status(201).json({   
        message: "Login user follower have found",
        data
    })

}

// Upadate Req accepted

export async function statusUpdate(req, res) {
    let { reqUserid } = req.params
    let loginUserid = req.user.id

    let followData = await followModel.findOne({
        _id: reqUserid,                     // hamne follow field mai kyo nhi di yai id 
        followee: loginUserid,
        status: "pending"
    })

    if (!followData) {
        return res.staus(403).json({
            message: "Follow req not found",
            success: false
        })
    }

    followData.status = "accepted"
    await followData.save()

    return res.status(201).json({
        message: "Request has been accepted",
        followData,
        success: true
    })

}

// Countdocument -- counts filter karke kitne fiels mathc hui bo Number deta hai
export async function getProfile(req,res) {
    let loginUser = req.user.id

     let followerCounts = await followModel.countDocuments({        
          followee:loginUser,
          status:"accepted",
    })

     let followingCounts = await followModel.countDocuments({        
          follower:loginUser,
    })

    res.status(201).json({
        message:"Login user profile",
        profileData:{
               followerCounts,
               followingCounts,
        }
    })
}



export async function showFollow(req,res){
    let loginUser = req.user.id

 let followingUser = await followModel.find({        
          follower:loginUser,
    }).populate("followee","username profileImage")

     let followerUsers = await followModel.find({        
          followee:loginUser,
          status:"accepted",
    }).populate("follower","username profileImage")
    

    return res.status(201).json({
        message:"profile follow and following user",
        followingUser,
        followerUsers
    })
}