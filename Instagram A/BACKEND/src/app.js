import express from 'express'
import userRouter from './Router/user-router.js'
import postRouter from './Router/post.router.js'
import searchRouter from './Router/user-search-router.js'
import cookie from 'cookie-parser'
import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import config from './config/config.js'
import cors from 'cors'
import morgan from 'morgan'
import chatRouter from './Router/chatuser.router.js'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use(cookie())
app.use(passport.initialize())

passport.use(new GoogleStrategy({
  clientID:  config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

app.use("/api/auth",userRouter)
app.use("/api/post",postRouter)
app.use("/api/",searchRouter)
app.use("/api/",chatRouter)

export default app
