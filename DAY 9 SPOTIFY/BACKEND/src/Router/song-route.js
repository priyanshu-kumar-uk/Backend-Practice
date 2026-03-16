import {Router} from 'express'
import {songUpload} from '../Controller/song-controler.js'
import multer from 'multer'

let songRouter  = Router()

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

songRouter.post("/songs",upload.single("song"),songUpload)

export default songRouter
