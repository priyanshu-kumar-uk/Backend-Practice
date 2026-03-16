import express from 'express'
import authRouter from './Router/user-auth-router.js'
import cors from 'cors'
import cookie from "cookie-parser"
import songRouter from './Router/song-route.js'
let app = express()
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/auth",authRouter)
app.use("/auth/song",songRouter)

export default app