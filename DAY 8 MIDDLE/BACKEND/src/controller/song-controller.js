// song upload
import nodeId3 from 'node-id3'
import {cloudUpload} from '../service/storage.js'
 export async function uploadSong(req,res){
   let data =  req.file
   let metaData =  nodeId3.read(data.buffer)
     
   let file =  await cloudUpload(data.buffer,data.originalname)
   
   res.status(201).json({
    message:"File is uplode",
    url:file.url
   })
}