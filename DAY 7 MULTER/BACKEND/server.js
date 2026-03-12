import app from './src/app.js'
import {dbconnect} from './src/config/database.js'

dbconnect()
app.listen(3000,()=>{
    console.log("server is running")
})