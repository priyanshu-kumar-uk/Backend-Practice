import axios from 'axios'

export async function chatUser(){
 let res =   await axios.get("http://localhost:3000/chatuser",{
    withCredentials:true
   })

   return res.data
}