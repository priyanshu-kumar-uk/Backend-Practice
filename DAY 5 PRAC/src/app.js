import express from 'express'
import authroutes from './routes/auth.route.js'
let app = express()
app.use(express.json())

app.use("/auth/route", authroutes)

export default app