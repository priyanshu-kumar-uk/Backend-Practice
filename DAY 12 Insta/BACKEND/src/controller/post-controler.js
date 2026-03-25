import {postimagekit} from '../services/post-imagekit.js'
export async function uploadMedia(req,res){
   let post = req.files
   
   let file = await Promise.all(
       post.map((postData)=>{
         return postimagekit(postData.buffer,postData.originalname)
       })
   ) 

 
   res.status(201).json({
    message:"Data have been got",
    file:file
   }) 
}