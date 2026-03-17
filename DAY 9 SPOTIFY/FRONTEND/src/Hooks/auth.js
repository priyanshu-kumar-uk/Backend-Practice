import { useContext } from "react";
import { AuthContext } from "../Context/Usercontext";
import {registerUser,login,getme} from '../Service/authApi.js'

export function  userAuth(){
    let{user,setUser,loding,setLoding} = useContext(AuthContext)

     async function  handleRegister({email,password,userType}){
      let data = await  registerUser(email,password,userType)
      setUser(data.user)
      return data
    }

    async function handleLogin({email,password}){
      let data = await login(email,password)
      setUser(data.userFind)
      return data
     }

    async function getMe() {
      let token =  await getme()
      setUser(token.decodeData)
      setLoding(false)
    } 

     return{
         user,
        handleRegister,
        handleLogin,
        getMe
     }
}




