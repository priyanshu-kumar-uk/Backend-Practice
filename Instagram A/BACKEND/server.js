import app from './src/app.js'
import {dbconnect} from './src/config/database.js'
import redis from './src/Cache/cache.js'

dbconnect()
app.listen(3000,()=>{
    console.log("Server is connected")
})