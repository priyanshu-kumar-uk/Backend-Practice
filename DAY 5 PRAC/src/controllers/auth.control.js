import usermodel from '../model/model.js'

export async function register(req,res){
    let{email,password} = req.body
     await usermodel.create({
       email,
       password
     })

     res.status(201).json({
        message:"user register succsesfully"
     })
}