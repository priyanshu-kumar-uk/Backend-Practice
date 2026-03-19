import express from 'express'
import mediaRoute from './Routes/post-route.js'
import userRouter from './Routes/user-route.js'
 let app = express()
 app.use(express.json())

 app.use("/auth",mediaRoute)
 app.use("/auth",userRouter)

 export default app