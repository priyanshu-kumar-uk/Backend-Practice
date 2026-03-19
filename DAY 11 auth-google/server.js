import app from './src/app.js'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import config from './src/config.js'
app.use(passport.initialize())

passport.use(new GoogleStrategy({
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }) );


app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {        // jo google data ko cookie mai store ho rha hai // storing data in cookie
                                                                                                      
     console.log(req)
    const token = jwt.sign({
       id: req.user.id, 
       displayName: req.user.displayName 
      }, config.JWT_SECRET , 
      { 
        expiresIn: '1h' 
      });

  }
);

app.listen(3000,()=>{
    console.log("Server is connected ")
})