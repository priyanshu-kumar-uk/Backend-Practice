import axios from 'axios'

export async function searchUser({ query }) {
  let response = await axios.get("http://localhost:3000/search?queryData=" + query, {
    withCredentials: true
  })
  return response.data
}

export async function followUser({ userId }) {
  let response = await axios.post("http://localhost:3000/follow/" + userId, {}, {  // doute why using {}
    withCredentials: true
  })
  return response.data
}

export async function followReq() {
  let response =  await axios.get("http://localhost:3000/followreq",{
      withCredentials:true     
    })
    return response.data
}

export async function acceptedReq({reqUserid}){
  let response =  await axios.patch("http://localhost:3000/requestUpdate/"+ reqUserid,{},{
    withCredentials:true
   })
   return  response.data
}

export async function getProfiles() {
   let response =  await axios.get("http://localhost:3000/profileGet",{
    withCredentials:true
   })
   return  response.data
  
}

export async function getUsers() {
   let response =  await axios.get("http://localhost:3000/usersGet",{
    withCredentials:true
   })
   return  response.data
  
}