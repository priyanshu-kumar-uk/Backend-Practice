import {Router} from 'express'
import {uploadMedia,getPosts} from '../controller/post-controller.js'
import multer from 'multer'
import {userVerify} from '../middleware/user-verify.js'

let postRouter = Router()

let storage =  multer.memoryStorage()
let upload = multer({storage:storage})

postRouter.post("/upload",userVerify,upload.array("Post",7),uploadMedia)
postRouter.get("/getPost",getPosts)


export default postRouter
