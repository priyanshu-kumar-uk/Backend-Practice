import Imagekit, { toFile } from '@imagekit/nodejs'
import config from '../config/config.js'

let client  = new Imagekit({
    privateKey:config.PRIVATE_KEY
})

export async  function uploadCloud ({buffer,filename,folder = "/instagram/posts"}){
 let response =  await client.files.upload({
    file: await Imagekit.toFile(buffer,filename), // what upload 
    fileName: filename,   // what will be file name
    folder
})

return response
}
