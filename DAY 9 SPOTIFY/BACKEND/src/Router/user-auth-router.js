import {Router} from 'express'
import {register,login, getMe,registerAuthgoogle} from '../Controller/user-auth-controler.js'
import {registerValidation} from '../Validator/user-Validater.js'
import passport from 'passport'


let authRouter = Router()

authRouter.post("/register", registerValidation, register) // c
authRouter.post("/login",login)   //c
authRouter.get("/getme", getMe)  //c

authRouter.get("/auth/google",passport.authenticate('google',{scope:['profile','email']}))  // this route provide a data of user
authRouter.get("/auth/google/callback",passport.authenticate('google',{failureRedirect:"/login",session:false}),registerAuthgoogle)

export default authRouter