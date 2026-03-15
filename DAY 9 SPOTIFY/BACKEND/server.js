import app from './src/app.js'
import {dbConnect} from './src/Config/database.js'

dbConnect()
app.listen(3000,()=>{
    console.log("Server is connected")
})