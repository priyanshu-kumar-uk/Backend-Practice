import imagekit from '@imagekit/nodejs'
import config from '../config/config.js'

const client =  new imagekit({
    privateKey: config.PRIVACY               
})

  export async function songs(req,res){
     let file = req.file          // this file is storing in Multer memory 

     let response = await client.files.upload({        // yha ham file kai data ko cloud server mai store kar rhe hai 
        file:file.buffer.toString("base64"),
        fileName:file.originalname,
        folder:"/Arjit"
    })
    console.log(response)
    res.status(201).json({
        message:"file is get",
        URL: response.url
    })
}



