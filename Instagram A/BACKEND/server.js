import redis from './src/Cache/cache.js'
import {dbconnect} from './src/config/database.js'
import httpServer from './src/socket.io/socket.io.js'

dbconnect()
httpServer.listen(3000,()=>{
    console.log("Server is connected")
})