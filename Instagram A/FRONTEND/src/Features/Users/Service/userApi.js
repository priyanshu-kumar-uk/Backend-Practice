import axios from 'axios'

export async function searchUser({ query }) {
  let response = await axios.get("/api/search?queryData=" + query, {
    withCredentials: true
  })
  return response.data
}

export async function followUser({ userId }) {
  let response = await axios.post("/api/follow/" + userId, {}, {  // doute why using {}
    withCredentials: true
  })
  return response.data
}

export async function followReq() {
  let response =  await axios.get("/api/followreq",{
      withCredentials:true     
    })
    return response.data
}

export async function acceptedReq({reqUserid}){
  let response =  await axios.patch("/api/requestUpdate/"+ reqUserid,{},{
    withCredentials:true
   })
   return  response.data
}

export async function getProfiles() {
   let response =  await axios.get("/api/profileGet",{
    withCredentials:true
   })
   return  response.data
  
}

export async function getUsers() {
   let response =  await axios.get("/api/usersGet",{
    withCredentials:true
   })
   return  response.data
  
}