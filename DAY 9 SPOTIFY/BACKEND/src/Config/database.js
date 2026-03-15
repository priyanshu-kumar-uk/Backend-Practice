import mongoose from 'mongoose'
import config from './config.js'
export async function dbConnect(){
   await mongoose.connect(config.MONGO_URI)
   console.log("database is connected")
}