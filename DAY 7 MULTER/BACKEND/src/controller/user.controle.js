import usermodel from '../model/model.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

 export async function register(req,res){
    let{email,password,userType} = req.body
   let users = await usermodel.create({
     email,
     password,
     userType,
    })

   let userToken = jwt.sign({
        email : users.email,
        id : users._id,
        userType: users.userType
    },config.TOKEN,{
        expiresIn:"8h"
    }
)
  res.cookie("userToken",userToken)

    res.status(201).json({
        message: "User has been registerd",
        userToken
    })
}

