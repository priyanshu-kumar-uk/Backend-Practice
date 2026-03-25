import {Router} from 'express'
import {register} from '../controller/user-controler.js'
import {login} from '../controller/user-controler.js'
import {uservalid} from '../validator/uservalid.js'
let userRouter  = Router()

userRouter.post("/register",uservalid,register)
userRouter.post("/login",login)
export default userRouter

