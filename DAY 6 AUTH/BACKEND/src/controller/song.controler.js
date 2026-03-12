import imagekit from "@imagekit/nodejs";
import config from "../config/config.js";

const client = new imagekit({
  privateKey: config.PRIVATE,
});

export async function uploadSong(req,res){
  let song = req.file;
  
 let response =  await client.files.upload({
   fileName:song.originalname,
   file: song.buffer.toString("base64"),
   folder: "/Sexysongs",
   jadu: "Jadu h nasha hai"
  })

  res.status(201).json({
    message:"Song mil gya",
    url: response.url
  })
}

