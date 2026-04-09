import {Router} from 'express'
import { register,login,googleAuth,getme } from '../controller/user-controller.js'
import { userRegister,userLogin } from '../Valiodator/user-validaiton.js'
import {userVerify} from '../middleware/user-verify.js'

import passport from 'passport'
const userRouter = Router()

userRouter.post('/register',userRegister,register)
userRouter.post('/login',userLogin,login)
userRouter.get('/getMe',userVerify,getme)


userRouter.get('/google',  passport.authenticate('google', { scope: ['profile', 'email'] }))
userRouter.get('/google/callback', passport.authenticate('google', { session: false }),googleAuth);


export default userRouter
