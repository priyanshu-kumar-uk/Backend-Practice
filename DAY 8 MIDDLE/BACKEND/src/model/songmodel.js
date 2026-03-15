import mongoose from 'mongoose'

let songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    url : String,
    postUrl : String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

let songModel= mongoose.model("songs",songSchema)

export default songModel