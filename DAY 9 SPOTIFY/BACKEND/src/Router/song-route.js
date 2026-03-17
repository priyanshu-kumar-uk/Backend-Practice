import {Router} from 'express'
import {songUpload,getSong} from '../Controller/song-controler.js'
import multer from 'multer'
import {userVerify} from '../Meddleware/verifyUser.js'
let songRouter  = Router()

const storage = multer.memoryStorage()
const upload = multer({storage:storage})


songRouter.post("/songs",userVerify,upload.single("song"),songUpload)  
songRouter.get("/getsong",getSong)

export default songRouter
