import express from 'express'
import authRouter from './Router/user-auth-router.js'
import cors from 'cors'
import cookie from "cookie-parser"
let app = express()
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/auth",authRouter)


export default app