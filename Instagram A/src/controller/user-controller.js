import userModel from "../model/user-model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
export async function register(req, res) {
  let { username, email, password, fullname } = req.body;

  let existUser = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (existUser) {
    return res.status(400).json({
      message: "User already exist",
    });
  }

  let hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  let userData = await userModel.create({
    username,
    email,
    password: hashPassword,
    fullname,
  });

  res.status(201).json({
    message: "User data mil gya",
    userData,
  });
}

export async function login(req, res) {
  let { email, password } = req.body;

  let userGet = await userModel.findOne({ email });

  if (!userGet) {
    res.status(403).json({
      message: "User not found",
      success: false,
    });
  }

  let hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  if (userGet.password !== hashPassword) {
    return res.status(403).json({
      message: "passwrod is incoorect Please try again",
      success: false,
    });
  }

  let userToken = jwt.sign(
    {
      email: userGet.email,
      id: userGet._id,
    },
    config.TOKEN,
    {
      expiresIn: "7d",
    },
  );

  res.cookie("userToken", userToken);

  res.status(201).json({
    message: "User have  logged-in",
    userGet,
    userToken,
  });
}

export async function getme(req, res) {
    let {email}  = req.user

  let userGet =  await userModel.findOne({email})
   
  res.status(201).json({
    message:"User Profile data Found",
    userGet
  })

}

export async function googleAuth(req, res) {
  let {
    id,
    displayName,
    emails: [{ value: email }],
  } = req.user;

  let username = email.split("@")[0]; //find user exits or not

  let exitUser = await userModel.findOne({
    $or: [{ email }, { googleId: id }, { username }],
  });

  if (!exitUser) {
    let user = await userModel.create({  //not exits user do this
      username: username,
      email: email,
      fullname: displayName,
      googleId: id,
    });
    let userToken = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      config.TOKEN,
      {
        expiresIn: "7d",
      },
    );
    res.cookie("userToken", userToken);

    res.status(201).json({
      message: "User has been registerd",
      success: true,
      user,
    });
  }

  let userTokenlogin = jwt.sign(
    {
      id: exitUser._id, 
      email: exitUser.email
    }, config.TOKEN,{
      expiresIn: "7d",
    },
  );
  res.cookie("userToken", userTokenlogin);

  res.status(201).json({
    message:"User have login successfully",
    success: true,
    userTokenlogin
  })
}

