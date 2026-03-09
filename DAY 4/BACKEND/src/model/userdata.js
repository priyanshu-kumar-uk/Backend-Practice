import mongoose from 'mongoose'

let myschema = new mongoose.Schema(
    [{
        title:String,
        decription : String
    }]
)

let usermdoel= mongoose.model("user",myschema)
export default usermdoel