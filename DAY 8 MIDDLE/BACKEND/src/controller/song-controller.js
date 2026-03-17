// song upload
import nodeId3 from 'node-id3'
import {cloudUpload} from '../service/storage.js'
import songModel from '../model/songmodel.js'
 export async function uploadSong(req,res){
   let data =  req.file
   
   let metaData =  nodeId3.read(data.buffer)
   let{title,artist,image} = metaData
    
   let file =  await cloudUpload(data.buffer,data.originalname)
   let imagefile =  await cloudUpload(image.imageBuffer,image.originalname +".png")
   
   let{url} = file
   let{thumbnailUrl}= imagefile
   
   let{id}= req.decode
  
  let songData = await songModel.create({
     title: title,
     artist: artist,
     url:  url,
     postUrl: thumbnailUrl,
     user: id
   })
  
   res.status(201).json({
    message:"File is uplode",
    url:file.url
   })
}                                      


 export async function findSong(req,res){
  let songFiles =  await  songModel.find()

  res.status(201).json({
    message: "Files and song are get",
    songFiles
  })
 }