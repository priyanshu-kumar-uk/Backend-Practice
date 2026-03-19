import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    
})

  let usermodel = mongoose.model("user",userSchema)
  export default usermodel