import jwt from "jsonwebtoken";
import config from "../config/config.js";
import redis from '../Cache/cache.js'

export async function userVerify(req, res,next) {
  let userToken = req.cookies.userToken;

  if (!userToken) {
    return res.status(422).json({
      message: "Unauthorized user ",
      seccess: false,
    });
  }

 let blackListToken =  await redis.get(userToken)

 if(blackListToken){
 return res.status(403).json({
  message:"Invalid Token",
  success:false
 }) 

 }

  try {
    let decode = jwt.verify(userToken, config.TOKEN);

    req.user = decode;
    next();

  } catch (err) {
    res.status(403).json({
        message:"Invalid Token",
        seccess:false
    })
  }
}


