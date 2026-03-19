import mongoose from 'mongoose'

let postSchema = new mongoose.Schema({
    caption :{
      type:  String,        
    } ,
    likeCount: Number,
    comment : String,
    media:[{
           url : url,
           mediaType: String,
    }],
    user:String,
    timestamps:true
})

let postmodel = mongoose.model("post",postSchema)
export default postmodel