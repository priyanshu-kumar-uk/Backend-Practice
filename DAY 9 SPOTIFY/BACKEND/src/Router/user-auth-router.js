import {Router} from 'express'
import {register,login, getMe} from '../Controller/user-auth-controler.js'
import {registerValidation} from '../Validator/user-Validater.js'


let authRouter = Router()

authRouter.post("/register", registerValidation, register) // c
authRouter.post("/login",login)   //c
authRouter.get("/getme", getMe)  //c

export default authRouter