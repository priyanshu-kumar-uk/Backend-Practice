import mongoose from 'mongoose'

let myschema =  new mongoose.Schema(
   [ {
       username : String,
       email : String 
    }]
)

let usermodel =  mongoose.model("userdatas",myschema)
export default usermodel