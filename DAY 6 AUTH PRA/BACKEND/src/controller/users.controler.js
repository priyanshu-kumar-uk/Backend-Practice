import usermodel from "../model/model.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
export async function register(req, res) {
  let { username, email, password } = req.body;
  let exitdata = await usermodel.findOne({email});
  if (exitdata) {
    return res.status(401).json({
      message: "user already exites ",
    });
  }
  let user = await usermodel.create({
    username,
    email,
    password,
  });
  let usertoken = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    config.TOKEN,
    {
      expiresIn: "5h",
    },
  );
  res.cookie("usertoken", usertoken);

  res.status(201).json({
    message: "User has a registred",
    user,
    usertoken
  });
}

export async function verifyuser(req,res){  // yai fnc actual user kon hai yai batta hai 
 let usertoken =  req.cookies.usertoken
 let deocdes = jwt.verify(usertoken,config.TOKEN)
 let user = await usermodel.findById(deocdes.id)
 res.status(201).json({
    message:"User is metched",
    username: user.username,
    email: user.email,
    id : user._id       
})
}

 export async function login(req,res){
  let{email,password} = req.body
 let user =  await usermodel.findOne({email})  // when email is matched than mongodb return a document of data

 if(!user){
    return res.status(401).json({
        message:"USER NOT FOUND"
    })
 }
let checkpas = user.password === password

if(!checkpas){
 return res.status(401).json({
    message:"Something went wrong"
 })
}

 res.status(201).json({
    message:"User loged-in"
 })
}
