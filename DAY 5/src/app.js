import express from 'express'
import authroutes from './routes/auth.routes.js'
const app = express()
app.use(express.json())

app.use("/auth/route",authroutes)
export default app