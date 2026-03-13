import {register} from '../controller/user.controle.js'
import {Router} from 'express'
let userRouter = Router()

userRouter.post("/register",register)   // filedname = songs
// userRouter.get("/user",verifyToken)

export default userRouter