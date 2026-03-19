import {postimagekit} from '../services/post-imagekit.js'
export async function uploadMedia(req,res){
   let post = req.files
   let postData;

   post.map((value)=>{
    return postData  = value
   })

   let file = await postimagekit(postData.buffer,postData.originalname)

   res.status(201).json({
    message:"Data have been got",
    file:file.url
   })
}