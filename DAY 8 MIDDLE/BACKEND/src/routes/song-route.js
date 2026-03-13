import {uploadSong} from '../controller/song-controller.js'
import {Router} from 'express'
import multer from 'multer'
import { verifyToken } from '../middleware/verifyToken-middle.js'

let songRouter = Router()

let storage = multer.memoryStorage()
let uplode =  multer({storage:storage})

songRouter.post("/songs",verifyToken,uplode.single("songs"),uploadSong)

export default songRouter
