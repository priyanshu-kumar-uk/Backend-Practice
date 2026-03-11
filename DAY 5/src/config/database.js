import mongoose from 'mongoose'
import config from './config.js'
async function dbconnect(){
  await  mongoose.connect(config.MYURI)
  console.log("connected to database")
}

export default dbconnect