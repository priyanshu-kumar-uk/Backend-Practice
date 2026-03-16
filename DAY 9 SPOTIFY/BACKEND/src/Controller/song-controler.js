import Imagekit from '@imagekit/nodejs'
export function songUpload(req,res){
     let data =  req.file
      
     const client =  new Imagekit({
        privateKey
     })



     res.status(201).json({
         message:"Song Createted",
         data   
     })
}

