import usermodel from '../Models/data.model.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
 export async function register(req,res){
    let{email,password}= req.body
   const user =  await usermodel.create({
        email,
        password,
     })

   let token = jwt.sign(
     {
        email: user.email,
        id: user._id
     },
      config.SETOKEN
    )

     res.status(201).json({
         message: "user register succesfully now user have a token",
         token 
     })
 }

 export async function getdata(req,res){
    let{token} = req.body
    let decode = jwt.verify(token,config.SETOKEN)

    res.status(200).json({
    message:"user find " ,
    decode
   })
}

// handle a routes logic