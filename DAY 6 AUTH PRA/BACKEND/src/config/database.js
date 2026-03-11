import mongoose from 'mongoose'
import config from './config.js'

 async function dbconnect(){
    await mongoose.connect(config.MONGO_URI)
    console.log("databse is connect")
    
 }

 export default dbconnect