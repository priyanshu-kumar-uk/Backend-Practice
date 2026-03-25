import mongoose from 'mongoose'

let postSchema = new mongoose.Schema({
    caption :{
      type:  String,
      default:"",
      maxlength: 2200 ,      
    } ,
    likeCount:{
       type: Number,
       default: 0
    },
    comment :{ 
      type: Number,
      default: 0
    },
    media:[{
           url : {
            type: String,
            required: true
           },
           mediaType: {
            type: String,
            enum:["image","video"],
            required: true
           }
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
},{
    timestamps:true
})

let postmodel = mongoose.model("post",postSchema)
export default postmodel