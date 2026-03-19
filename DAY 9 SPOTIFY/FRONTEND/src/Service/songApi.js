import axios from 'axios'

export async function createSong(){
   
    const formdata = new FormData()
    formdata.append("song",songFile)

    
 const response =   await axios.post("http://localhost:3000/song/songs",formdata,{
    withCredentials:true
 })
 return response.data
}

