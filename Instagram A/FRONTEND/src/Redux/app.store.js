import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../Redux/auth.slice.js'
import postReducer from '../Redux/post.slice.js'
import userReducer from '../Redux/user.slice.js'

export const store  = configureStore({
    reducer:{
           auth: authReducer,
           posts: postReducer,
           users:userReducer,
    }
})