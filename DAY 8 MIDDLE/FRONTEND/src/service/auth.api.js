import axios from 'axios'

export async function registers({email,password,userType}){
  let response = await axios.post("http://localhost:3000/auth/register",{
    email,
    password,
    userType
   })   
 alert( response.data.message)
}

export async function login({email,password}){
 let response =  await axios.post("http://localhost:3000/auth/login",{
    email,
    password
   },{withCredentials: true})
}