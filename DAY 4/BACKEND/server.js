import app from './src/app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
 async function mydb(){
   await mongoose.connect("mongodb+srv://server:ml6BAhZGH4g36yuw@cluster.oo0dktc.mongodb.net/clinet")
   console.log("database is running")
}
mydb()

app.listen(3000,()=>{
    console.log("server is running")
})