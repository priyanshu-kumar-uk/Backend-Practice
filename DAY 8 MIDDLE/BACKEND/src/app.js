import express from 'express'
import authRoutes from './routes/auth-user-route.js'
import songRouter from './routes/song-route.js'
import cookie from 'cookie-parser'
import cors from 'cors'
const app =  express()
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST"]
}))

app.use("/auth",authRoutes)
app.use("/song",songRouter)

export default app