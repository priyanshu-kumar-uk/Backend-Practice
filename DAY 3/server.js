import app from './src/app.js'
import mongoose from 'mongoose'

let mydb = async()=>{
   await mongoose.connect("mongodb+srv://server:ml6BAhZGH4g36yuw@cluster.oo0dktc.mongodb.net/notes-data")
   console.log("Databse connceted from server")
}
mydb()
app.listen(3000,()=>{
    console.log("Server is running to 3000 port")
})