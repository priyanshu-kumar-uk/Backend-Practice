import {uploadCloud} from '../service/storage.js'
import postModel from '../model/post-model.js'
export async function uploadMedia(req,res){
     let data = req.files
     let user = req.user.id
     let {caption} = req.body

     let mediaData = await Promise.all(data.map(async (elem)=>{
      let resData = await  uploadCloud({buffer: elem.buffer,filename:elem.originalname})
       return{
         url: resData.url,
         media_type: elem.mimetype.split("/")[0]  //["image", "png"][0] want first part = image
       }       
     }))


      let postData = await postModel.create({
              caption: caption,
              author: user,
              media: mediaData
        })     
 
      return res.status(201).json({
        message:"Data file",
        postData
     })
}

export async function getPosts(req,res) {
      
 let postData = await postModel.find().populate("author","username profileImage")  //author: post mai hai, aur mujhe sab detail milgei post ki bhi user ki bhi iyha mujhe user ki imformation mil rhi hai 

 res.status(201).json({
   message:"Data have geted",
   postData
 })
}
