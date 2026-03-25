import express from 'express'
import mediaRoute from './Routes/post-route.js'
import userRouter from './Routes/user-route.js'
import cookie from 'cookie-parser'
 let app = express()
 app.use(express.json())
 app.use(cookie())
 
 
 app.use("/auth",userRouter)
 app.use("/auth",mediaRoute)


 export default app