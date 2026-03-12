import mongoose from 'mongoose'

let userschema = new mongoose.Schema({
       email :String,
       password: String,
       userType:{
        type: String,
        enum: ["user","artist"],
        default: "user"
       }
})

let usermodel = mongoose.model("user",userschema)

export default usermodel