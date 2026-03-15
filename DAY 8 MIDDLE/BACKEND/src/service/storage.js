import imagekit from "@imagekit/nodejs";
import config from "../config/config.js";

  const client = new imagekit({
    privateKey: config.PRIVATEKEY,
  });

 export async function cloudUpload(buffer,fileName) {
  
  const response = await client.files.upload({
    file: await imagekit.toFile(buffer,fileName),
    fileName: fileName,
  });
  
  return response
}

