import mongoose from 'mongoose'

 let userschema = new mongoose.Schema({
    username: String,
    email:String,
    password:String
})
let usermodel = mongoose.model("users",userschema)

export default usermodel