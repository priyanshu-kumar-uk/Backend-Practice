import express from 'express'
import userRoutes from './routes/user.routes.js'
import cookie from 'cookie-parser'
import songRoute from './routes/song.route.js'
let app = express()
app.use(express.json())
app.use(cookie())

app.use("/auth",userRoutes)
app.use("/song",songRoute)

export default app