import express from 'express'
import authrouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import songRouter from './routes/song.routes.js'

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/auth",authrouter)
app.use("/song",songRouter)


export default app