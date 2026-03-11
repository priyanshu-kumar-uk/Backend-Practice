import {register,verifyuser,login} from '../controller/users.controler.js'
import {Router} from 'express'

let userroutes = Router()

userroutes.post("/register",register)
userroutes.get("/get-user",verifyuser)
userroutes.post("/login",login)

export default userroutes
