import mongoose from 'mongoose'

let userSchema =  new mongoose.Schema({
      email:String,
      password: String,
      userType:{
           type : String,
           enum : ["user","artist"],
           default: "user"
      }
})

let usermdoel =  mongoose.model("users",userSchema)
export default usermdoel