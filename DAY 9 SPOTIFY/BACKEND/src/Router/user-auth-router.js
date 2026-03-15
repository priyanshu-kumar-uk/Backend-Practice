import {Router} from 'express'
import {register,login} from '../Controller/user-auth-controler.js'
import {verifyToken} from '../verify/verifyToken.js'

let authRouter = Router()

authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.get("/metaMusic",verifyToken,((req,res)=>{
      res.json({
        success:true,
        user: req.decode
    })
}))

export default authRouter