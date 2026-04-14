import mongoose from 'mongoose'
import followModel from '../model/userFollow.model.js'

export async function getChatUser(req,res) {

    let loginUserId =  req.user.id
    let logedinUserId = new mongoose.Types.ObjectId(loginUserId)

    let user = await followModel.aggregate([

        {
            $match: {
                $or: [   // koi bhi condition mil jaye data lekar ayo 
                    { followee: logedinUserId },
                    { follower: logedinUserId }
                ],
                status: "accepted"
            }
        },
        {
            $addFields: {
                user: {
                    $cond: {
                        if: {
                            $eq: ['$follower', logedinUserId]   // user same hai to followee bala lekar ayo barna name diffrent hai to follower ma idal do  
                        },
                        then: '$followee',   // followee bala data
                        else: '$follower'
                    }
                }
            }
        },
        {
            $project: {
                user: 1
            }
        },
        {
            $group: {
                _id: '$user',   //i have pull all same data in single document 
                user: { $first: '$$ROOT' }
            }
        },
        {
            $project: {
                _id: "$user._id",  // same baise hi data mai aa gya
                user: "$user.user"
            }
        }, {
            $lookup: {
                from: 'users',
                localField: "user",   // we have doute why give user 
                foreignField: '_id',   // username 
                as: "user"
            }
        }, {
            $unwind: {
                path: "$user",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $project: {
                _id: "$user._id",
                username: "$user.username",
                profilePicture: "$user.profileImage"
            }
        }

    ])

    console.log(user)

    return res.status(201).json({
        message:"Users get succesfully",
        user
    })

}