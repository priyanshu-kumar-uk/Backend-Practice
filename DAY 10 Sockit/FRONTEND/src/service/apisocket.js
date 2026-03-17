import {io} from 'socket.io-client'

let socket ;// this line start a connection from a server

export function connectedSocket(){
   socket  =  io("http://localhost:3000");
   console.log("soket is connected")
}

export  function reciveListner(event,callback){
    socket.on(event,callback)  // client sai data bhejna hai na isliye 
}

export function sendListner(event,data){
     socket.emit(event,data)       
}
