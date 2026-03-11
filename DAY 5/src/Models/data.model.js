import mongoose from 'mongoose'

let userschema = new mongoose.Schema([{
    email:String,
    password:String
}])

let usermodel = mongoose.model("user",userschema)

export default usermodel
