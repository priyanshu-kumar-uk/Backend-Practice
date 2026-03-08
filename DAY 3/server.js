import app from './src/app.js'
import mongoose from 'mongoose'

let mydb = async ()=>{
    await mongoose.connect("mongodb+srv://server:ml6BAhZGH4g36yuw@cluster.oo0dktc.mongodb.net/notes-data")
     console.log("MOngodb connceted from sevrer ")
}

mudb()
app.listen(3000,()=>{
    console.log("server is running")
})


// run a server
// make a connetion from nongodb to server