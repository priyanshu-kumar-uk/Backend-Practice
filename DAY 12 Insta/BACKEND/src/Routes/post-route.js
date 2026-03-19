import {Router} from 'express'
import {uploadMedia} from '../controller/post-controler.js'
import multer from 'multer'

const storage  = multer.memoryStorage()
const upload = multer({storage:storage})


let mediaRoute = Router()

mediaRoute.post("/media",upload.array("post",5),uploadMedia)

export default mediaRoute