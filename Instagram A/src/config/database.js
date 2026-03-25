import mongoose from 'mongoose'
import config from './config.js'

export function dbconnect(){
      mongoose.connect(config.MONGO_URI)
      console.log("Database has connected")
}