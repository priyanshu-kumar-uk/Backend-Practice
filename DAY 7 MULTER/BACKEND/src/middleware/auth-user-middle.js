import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export  async function verifyToken(req,res,next) {
    let userToken = req.cookies.userToken
    
    if(!userToken){
        res.send("registerd user first")
    }

    let verifyuser = jwt.verify(userToken,config.TOKEN)
    
    if(verifyuser.userType === "user"){
        return res.status(403).json({
            message:"Unauthorized user"
        })
    }
     next()
}