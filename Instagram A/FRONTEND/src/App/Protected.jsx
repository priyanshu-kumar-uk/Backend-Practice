import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { auth } from '../Features/Auth/Hooks/auth-hook'
import {Navigate, Outlet} from 'react-router-dom'
const Protected = () => {

let getME = useSelector((state)=>state.auth.user)
let loading = useSelector((state)=>state.auth.loading)

let {getuser} = auth()

useEffect(()=>{
    getuser()
},[])

if(!getME){
return <Navigate to="/login" />
}

return <Outlet/>
  
}

export default Protected