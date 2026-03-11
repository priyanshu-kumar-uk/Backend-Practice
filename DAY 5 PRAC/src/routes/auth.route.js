import express from 'express'
import {register} from '../controllers/auth.control.js'

let authrouter = express.Router()   

authrouter.post("/register",register)

export default authrouter
