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
        trim: true,
        unique:true
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
     },
    profileImage: {
            type: String,
            default: "https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp?updatedAt=1773986129958"
     }
}) 

userSchema.index({googleId:1},{sparse:true, unique:true}) //sirf un documents ko index me rakho jahan googleId field actually present ho

userSchema.index({username:"text"})

let userModel =  mongoose.model("user", userSchema)

export default userModel