import express from 'express'
import authRoutes from './routes/auth-user-route.js'
import songRouter from './routes/song-route.js'
import cookie from 'cookie-parser'
const app =  express()
app.use(express.json())
app.use(cookie())

app.use("/auth",authRoutes)
app.use("/song",songRouter)

export default app