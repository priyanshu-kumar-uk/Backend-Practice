import express from 'express'
import authRouter from './Router/user-auth-router.js'
import cors from 'cors'
import cookie from "cookie-parser"
import songRouter from './Router/song-route.js'
import {Strategy as GoogleStarategy} from 'passport-google-oauth20'
import passport from 'passport'
import config from './Config/config.js'

let app = express()
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(passport.initialize())

passport.use(new GoogleStarategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: '/auth/google/callback',    
},(accessToken, refreshToken,profile,done,)=>{
    return done(null,profile)
}
))


app.use("/auth",authRouter)
app.use("/auth/song",songRouter)

export default app