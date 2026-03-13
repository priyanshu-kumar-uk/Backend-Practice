import usermdoel from '../model/mdoel.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
export  async function register (req,res) {
  let{email,password,userType} = req.body
  let exitEmail = await usermdoel.findOne({email})

   if(email===exitEmail.email){
    return res.status(403).json({
        message: "Please Enter Another Email"
    })
   }

    await usermdoel.create({
       email,
       password,
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
  
  if( password !== userFind.password){
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


