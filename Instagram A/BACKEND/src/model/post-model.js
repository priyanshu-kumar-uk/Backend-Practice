import mongoose, { mongo } from 'mongoose'

let postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required: true,
        maxlength:2100
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",                                   // yha sai user ki details lekar ayega
        required:true

    },
    media:[{
        url:{
            type:String,
            required:true
        },
        media_type:{
            type:String,
            enum:["image","video"]
        }
    }]
})



let postModel =  mongoose.model("post",postSchema) 
export default postModel

