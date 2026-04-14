import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { auth } from '../Features/Auth/Hooks/auth-hook'
import {Navigate, Outlet, useLocation} from 'react-router-dom'
const Protected = () => {

let getME = useSelector((state)=>state.auth.user)
let loading = useSelector((state)=>state.auth.loading)
let location = useLocation()

let {getuser} = auth()

useEffect(()=>{
  if (!getME) {
    getuser()
  }
},[getME])

if(getME){
return <Outlet/>
}

if(loading){
return <div className="insta-empty-panel">Checking login...</div>
}

return <Navigate to="/login" state={{from: location}} replace />
  
}

export default Protected
