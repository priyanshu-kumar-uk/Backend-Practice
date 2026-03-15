import jwt from 'jsonwebtoken'
import config from "../Config/config.js"

export function verifyToken(req,res,next){
    let userToken = req.cookies.userToken
    
    if(!userToken){
        return res.status(403).json({
            message:"Unauthorized User"
        })
    }

   let decode = jwt.verify(userToken,config.TOKEN)

   res.status(201).json({
    message:"User has a token",
    decode
   })
    
   req.decode = decode
   
   next()

}