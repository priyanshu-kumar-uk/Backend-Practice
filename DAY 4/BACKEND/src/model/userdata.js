import mongoose from 'mongoose'

let userschema = new mongoose.Schema(
    [
        {
           username:String,
           email: String
        }
    ]
)

let usermodel = mongoose.model("clinet",userschema)
export default usermodel
