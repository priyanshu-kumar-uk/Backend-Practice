import axios from 'axios'
export async function createSong({songFile}){
   
    const formdata = new FormData()
    formdata.append("song",songFile)
    
 const response = await axios.post("http://localhost:3000/auth/song/songs",formdata,{withCredentials:true})
 return response.data
}
export async function getsong(){
   const response = await axios.get("http://localhost:3000/auth/song/getsong")
   return response.data.songData
}
