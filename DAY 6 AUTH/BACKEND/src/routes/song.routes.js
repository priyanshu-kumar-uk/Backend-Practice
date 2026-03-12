import {Router} from 'express'
import {uploadSong} from '../controller/song.controler.js'
import {upload} from '../app.js'
import multer from 'multer'

let songRouter = Router()

let mst =  multer.memoryStorage()
let upload = multer({storage: mst})
songRouter.post("/", upload.single("jadu-song"), uploadSong)

export default songRouter




