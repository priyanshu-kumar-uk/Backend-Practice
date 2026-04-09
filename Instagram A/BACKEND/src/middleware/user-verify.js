import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function userVerify(req, res,next) {
  let userToken = req.cookies.userToken;

  if (!userToken) {
    return res.status(422).json({
      message: "Unauthorized user ",
      seccess: false,
    });
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


