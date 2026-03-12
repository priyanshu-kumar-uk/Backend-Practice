import {songs} from '../controller/song.control.js'
import {Router} from 'express'
import multer from 'multer'

let songRoute = Router()

let storage = multer.memoryStorage()
const uplode =  multer({storage:storage}) // create a middleware

songRoute.post("/songs",uplode.single("songs"),songs)

  export default  songRoute
