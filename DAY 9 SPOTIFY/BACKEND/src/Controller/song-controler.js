import { decode } from "jsonwebtoken";
import songModel from "../Model/song.model.js";
import { cloudUpload } from "../Service/storage.js";
import Node3 from "node-id3";
// import  from '../Model/userModel.js'

export async function songUpload(req, res) {
  let data = req.file;

  let nodeData = Node3.read(data.buffer); // yai khcuch extra data deta hai
  let { image,title,artist } = nodeData;
  
  if (!data) {
    return res.status(401).json({
      message: "Please Upload a File",
    });
  }

  let file = await cloudUpload(data.buffer, data.originalname);
  let imagefile = await cloudUpload(
    image.imageBuffer,
    image.originalname + ".png",
  );

  let{url} = file
  let{thumbnailUrl}  = imagefile
  let{id}  = req.decode

let songData =  await songModel.create({
     title,
     artist,
     url,
     postUrl : thumbnailUrl,
     user: id
 })


  res.status(201).json({
    message: "Song Createted",
  });
}


 export async function getSong(req,res){
    let songData = await songModel.find()

    res.status(201).json({
      message:"Song have been got",
      songData
    })
}