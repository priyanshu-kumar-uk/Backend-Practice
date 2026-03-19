import usermodel from '../model/user-model.js'
export function register(req,res){
    let{ username,email,password,profileImage,fullname}  = req.body

 let userExits =   usermodel.findOne({
    $or:[
        {email},
        {username}
   ]
   })

   if(userExits){
    return res.status(403).json({
        message:"User already registerd"
    })
   }
    

 let data  = usermodel.create({
        username,
        email,
        password,
        profileImage,
        fullname
    })


    res.status(201).json({
        message:"User has been registerd",
        data
    })
}