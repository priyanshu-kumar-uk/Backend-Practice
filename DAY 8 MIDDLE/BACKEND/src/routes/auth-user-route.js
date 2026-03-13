import {register,login} from '../controller/auth-user-control.js'
import {Router} from 'express'

let authRouter = Router()

authRouter.post("/register",register)
authRouter.get("/login",login)

export default authRouter