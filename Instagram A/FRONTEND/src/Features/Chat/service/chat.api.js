import axios from 'axios'

export async function chatUser(){
 let res =   await axios.get("http://localhost:3000/api/chatuser",{
    withCredentials:true
   })

   return res.data
}