import {songs} from '../controller/song.control.js'
import {Router} from 'express'
import multer from 'multer'
import {verifyToken} from '../middleware/auth-user-middle.js'

let songRoute = Router()

let storage = multer.memoryStorage()
const uplode =  multer({storage:storage}) // create a middleware

songRoute.post("/songs",verifyToken,uplode.single("songs"),songs)

  export default  songRoute
