import {register,tokenverify} from '../controller/auth-controller.js'
import {Router} from 'express'

let authrouter = Router()

authrouter.post("/register",register)
authrouter.get("/get-data",tokenverify)
export default authrouter




