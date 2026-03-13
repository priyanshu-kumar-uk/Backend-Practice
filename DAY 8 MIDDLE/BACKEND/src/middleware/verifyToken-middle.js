import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export async function verifyToken(req,res,next) {
 let userToken = req.cookies.userTokens

 if(!userToken){
  return res.status(403).json({
      message:"Unuthorized User"
   })
 }
 let decode = jwt.verify(userToken,config.PRIVATE)
 
 if(decode.userType !== "artist"){
 return  res.status(403).json({
      message:"Invalid User Only For Artist"
   })
 }
 
 next()
}
