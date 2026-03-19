import {Router} from 'express'
import {register} from '../controller/user-controler.js'
let userRouter  = Router()

userRouter.post("/register",register)

export default userRouter