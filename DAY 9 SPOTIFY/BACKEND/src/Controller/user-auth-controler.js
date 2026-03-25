import usermodel from "../Model/userModel.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../Config/config.js";
export async function register(req, res) {
  let { email, password, userType } = req.body;

  let hashPasssword = crypto
    .createHash("sha512")
    .update(password)
    .digest("hex");

  let exitsUser = await usermodel.findOne({email});

  if (exitsUser) {
    return res.status(409).json({
      message: "User Already Registered",
      success: false,
    });
  }

  let user = await usermodel.create({
    email,
    password: hashPasssword,
    userType,
  });
   
  return res.status(201).json({
    message: "User Registerd Susccesfully",
    success: true,
    user,
  });
}



export async function login(req, res) {
  let { email, password } = req.body;
  let userFind = await usermodel.findOne({ email });

  let hashPassword = crypto.createHash("sha512").update(password).digest("hex");

  if (!userFind) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }

  if (hashPassword !== userFind.password) {
    return res.status(404).json({
      message: "Invalid password",
      success: false,
    });
  }
  let userToken = jwt.sign(
    {
      email: userFind.email,
      id: userFind._id,
    },
    config.TOKEN,
    {
      expiresIn: "48h",
    },
  );

  res.cookie("userToken", userToken);

  res.status(200).json({
    message: "Login Succesfully Lets'go",
    success: true,
    userFind,
    userToken
  });
}

export async function getMe(req, res) {
  const token = req.cookies.userToken;

   if (!token) {
    return res.status(401).json({
      message: "Access not allowed",
      success: false,
    });
   }

   const decoded = jwt.verify(token, config.TOKEN);
   let{email} = decoded

   let decodeData = await usermodel.findOne({email})

   return res.status(200).json({
    message: "Access granted",
    success: true,
    decoded,
    decodeData
  });
}
