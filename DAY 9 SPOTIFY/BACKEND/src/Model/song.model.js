import mongoose from 'mongoose'
  let songSchema  = new mongoose.Schema({
    title: String,
    artist : String,
    url: String,
    postUrl: String,
    user:{
          type:mongoose.Schema.Types.ObjectId,                 //is model sai user ka data nikal store karo
          ref:"users"
    }
})

 let songModel =  mongoose.model("song",songSchema)
 export default songModel