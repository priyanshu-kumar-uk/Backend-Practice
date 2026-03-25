import mongoose from 'mongoose'

let userSchema =  new mongoose.Schema({
     username: {
        type : String,
        required: true,
        trim: true

     },
     email:{
        type:String,
        required: true,
        trim: true
     },
    password: {
        type: String,
        required: function() {
            return !this.googleId;
        }
     },
     fullname:{
         type:String,
         required:true,
         trim:true
     },
     googleId :{
        type:String,
        unique: true
     }
}) 

let userModel =  mongoose.model("user", userSchema)

export default userModel