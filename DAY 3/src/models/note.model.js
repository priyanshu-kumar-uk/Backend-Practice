import mongoose, { model, Schema } from 'mongoose'

const myschema = new mongoose.Schema(
  [  {
        username:String,
        password: String,
    }]
)

let usermodel  = mongoose.model("userdata",myschema)

export default usermodel










// Create a schema and create a model