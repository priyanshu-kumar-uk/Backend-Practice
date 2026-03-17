import {Router} from 'express'
import {register,login, getMe} from '../Controller/user-auth-controler.js'

let authRouter = Router()

authRouter.post("/register",register)   // c
authRouter.post("/login",login)   //c
authRouter.get("/getme", getMe)  //c

export default authRouter