import mongoose from 'mongoose'

 let userSchema = new mongoose.Schema({
       email: String,
       password: String,
       userType:{
        type: String,
        enum :["user","artist"],
        default :'user'
       }
})

let usermodel = mongoose.model("users",userSchema)

export default usermodel