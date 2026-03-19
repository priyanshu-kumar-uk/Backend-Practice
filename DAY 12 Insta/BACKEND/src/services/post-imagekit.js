import Imagekit from '@imagekit/nodejs'
import config from '../config/config.js'

export async function postimagekit(buffer,fileName){

    const client = new Imagekit({
        privateKey : config.PRIVATE_KEY,
    })
    try{
         const response = await client.files.upload({
         file: await Imagekit.toFile(buffer,fileName) ,
         fileName:fileName
    })
    return response
}
    catch(error){
          res.status(403).json({
             message:"Image uploading something wrong"
          })
    }
   

}