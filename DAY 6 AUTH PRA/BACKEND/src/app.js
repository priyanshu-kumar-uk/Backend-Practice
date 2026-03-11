import express from 'express'
import userroutes from './routes/user.routes.js'
import cookie from 'cookie-parser'
let app = express()

app.use(express.json())
app.use(cookie())
app.use("/auth",userroutes)

export default app
