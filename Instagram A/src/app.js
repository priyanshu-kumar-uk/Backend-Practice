import express from 'express'
import userRouter from './Router/user-router.js'
import cookie from 'cookie-parser'
import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import config from './config/config.js'

const app = express()
app.use(express.json())
app.use(cookie())
app.use(passport.initialize())

passport.use(new GoogleStrategy({
  clientID:  config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

app.use("/auth",userRouter)

export default app