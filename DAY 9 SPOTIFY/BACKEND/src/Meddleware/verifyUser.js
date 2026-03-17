import jwt from 'jsonwebtoken'
import config from '../Config/config.js'
import userModel from '../Model/userModel.js'
import songModel from '../Model/userModel.js'
export async  function userVerify(req,res,next){
   let userToken = req.cookies.userToken

   if(!userToken){
    return res.status(401).json({
        message: "Please provides a token"
    })
   }
 

   let  decode =  jwt.verify(userToken,config.TOKEN)
   let{email} = decode


   let data =   await userModel.findOne({email})

   if(data.userType !== "artist"){
        return res.status(401).json({
          message:"Only For Artist Unauthorized User"
        })
   }

   req.decode = decode

   next()
}

