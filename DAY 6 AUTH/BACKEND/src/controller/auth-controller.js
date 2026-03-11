import usermodel from '../model/model.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
export async function register (req,res){
     let{email,password,userType} = req.body
     let user =  await usermodel.create({
       email,
       password,
       userType,
     })

     let usertoken = jwt.sign({
          email:user.email,
          id : user._id
         },config.TOKEN,{
           expiresIn:"1h"
         },
     )
     res.cookie("usertoken",usertoken)

     res.status(201).json({
        message : "User registerd ",
        usertoken
     })
}

// verify user token

export async function tokenverify(req,res){
    let usertoken  = req.cookies.usertoken
    let decode = jwt.verify(usertoken,config.TOKEN)

  res.status(200).json({
    message:"token verify",
    decode
  })
}






