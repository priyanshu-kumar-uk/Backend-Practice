import mongoose, { mongo } from 'mongoose'

let spschema =  new mongoose.Schema([{
  email: String,
  password:String,
  userType:{
    type: String,
    enum:["user","artist"],
    default:"user"
  }
 }])

 let usermodel =  mongoose.model("users",spschema)
 export default usermodel


    