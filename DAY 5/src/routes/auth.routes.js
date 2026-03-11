import express from 'express'
import {register,getdata} from '../Controllers/auth.control.js'
const authrouter = express.Router()

authrouter.post("/register",register)
authrouter.get("/data",getdata)



export default authrouter

// Define a API path