import app from '../app.js'
import {createServer} from 'http'
import {Server} from 'socket.io'

let httpServer = createServer(app)
let io = new Server(httpServer,{
   cors:{
      origin: "http://localhost:5173",
      methods:["GET","HEAD","PUT","PATCH","POST","DELETE"],
      credentials:true
   }

})

io.on("connection",(socket)=>{
   console.log("User connected ")

     socket.on("msg",(msg)=>{
        io.emit("msg", msg)  // event , data
     })
     socket.on("msg2",(msg)=>{
        io.emit("msg2", msg)  // event , data
     })

   socket.on("disconnect",()=>{
   console.log("User Disconected ")

   })
})

export default httpServer