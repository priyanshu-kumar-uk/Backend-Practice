import imagekit from "@imagekit/nodejs";
import config from "../config/config.js";

 export async function cloudUpload(buffer,fileName) {
    const client = new imagekit({
    privateKey: config.PRIVATEKEY,
  });

  const response = await client.files.upload({
    file: await imagekit.toFile(buffer,fileName),
    fileName: fileName
  });
  
  return response
}
