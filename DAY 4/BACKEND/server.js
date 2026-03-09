import app from './src/app.js'
import mongoose from 'mongoose'

let mydb  = async ()=>{
  await mongoose.connect("mongodb+srv://server:ml6BAhZGH4g36yuw@cluster.oo0dktc.mongodb.net/userdata")
  console.log("Database has been connceted")
}

mydb()
app.listen(3000,()=>{
    console.log("server i running")
})