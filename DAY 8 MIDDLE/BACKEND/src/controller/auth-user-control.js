import usermdoel from '../model/mdoel.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import crypto from 'crypto'
export  async function register (req,res) {
  let{email,password,userType} = req.body
  let exitEmail = await usermdoel.findOne({email})
  
  let passwordhash = crypto.createHash("sha512").update(password).digest("hex")

   if(email===exitEmail){
    return res.status(403).json({
        message: "Please Enter Another Email"
    })
   }

    await usermdoel.create({
       email,
       password:passwordhash,
       userType
    })

    res.status(201).json({
        message:"User has been Registered",
        
    })
}

export async function login(req,res) {
  let{email,password} = req.body
  
  let userFind = await usermdoel.findOne({email})   // isme jo email body di ja rhi bo di hai
  if(!userFind){
      return  res.status(403).json({
            message:"User Not Found"
        })
  }
  
 let passwordHash = crypto.createHash("sha512").update(password).digest("hex")

  if( passwordHash !== userFind.password){
       return res.status(403).json({
        message:"Somthing Went Wrong Please try again"
       })
  }

  let userToken = jwt.sign({
    email: userFind.email,
    userType:userFind.userType,
    id: userFind._id
  },config.PRIVATE,{
    expiresIn:"24h"
  }
 )

  res.cookie("userTokens",userToken)
  res.status(201).json({
    message:"WELCOME META MUSIC",
    userFind,
  })
   
}


