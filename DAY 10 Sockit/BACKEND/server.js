import app from './src/app.js'
import http, { createServer } from 'http'   // iska used isliye karte hai taki ham http server and and socket domno ka used kar sake
import {Server} from 'socket.io'

const httpServer = http.createServer(app)
const io =  new Server(httpServer,{
    cors:{
   origin:"http://localhost:5173",
   methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>{             // pure server sai user connected hu 
    console.log("User connected")

    socket.on("disconnect",()=>{           // disconnect is inbild event in socket.io
        console.log("User has been disconnected")
    })

    socket.on("message",(data)=>{          // yai ek single user sai data aa rha hai  than ham usko data girld mai la rhe  soket ka mean hot ahai single user and on ka mean hota hai eventm listen karo evene ahamne message name dsai diya hai ya khcuh bhi ho sakt ahai 
        socket.broadcast.emit("message",data)    // yha sai data send hoga 
    })
})


httpServer.listen(3000,()=>{
    console.log("Server is connected ")
})