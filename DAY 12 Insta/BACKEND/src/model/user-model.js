import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    bio:{
       type:String,
    //    required:true,
    },
    profileImage:{
        type:String,
        default:'https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp'
    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    private: {
        type: Boolean,  // return true/false
        default:true    
    }
    
},{
    timestamps:true
}
)

  let usermodel = mongoose.model("user",userSchema)
  export default usermodel