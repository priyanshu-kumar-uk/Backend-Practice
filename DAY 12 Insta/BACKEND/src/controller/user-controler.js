import usermodel from "../model/user-model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from '../config/config.js'
export async function register(req, res) {
  let { username, email, password, fullname } = req.body;

  let userExits = await usermodel.findOne({
    $or: [{ email }, { username }],
  });

  let hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  if (userExits) {
    return res.status(422).json({
      message: "User already registerd",
      success: false,
    });
  }

  let data = await usermodel.create({
    username,
    email,
    password: hashedPassword,
    fullname,
  });

  res.status(201).json({
    message: "User has been registerd",
    success: true,
    data,
  });
}

export async function login(req, res) {
  let { email, password } = req.body;
  let user = await usermodel.findOne({ email });

  let hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  if (!user) {
    return res.status(403).json({
      message: "User have not registerd",
      success: false,
    });
  }

  if (hashedPassword !== user.password) {
    return res.status(403).json({
      message: "Password is wrong Try again please",
      success: false,
    });
  }

 let userToken =  jwt.sign({
    id: user._id,
    email: user.email
  },config.TOKEN,{
    expiresIn:"7d"
  })
  
  res.cookie("userToken",userToken)

  res.status(201).json({
    message: "User logged-in successfully",
    success: true,
    user: user,
    userToken
  });
}

// GoogleRegister pending