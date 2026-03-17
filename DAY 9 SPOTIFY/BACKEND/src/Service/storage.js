import Imagekit from "@imagekit/nodejs";
import config from "../Config/config.js";

const client = new Imagekit({
  privateKey: config.IMAGE_KEY,
});

export async function cloudUpload(buffer,fileName) {
  
  const response = await client.files.upload({
    file: await Imagekit.toFile(buffer,fileName),
    fileName: fileName,
  });
  

  return response;
}
