import axios from 'axios'

export async function chatUser(){
 let res =   await axios.get("/api/chatuser",{
    withCredentials:true
   })

   return res.data
}