import React, { useEffect, useState } from 'react'
import {getme} from '../Service/authApi.js'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const [access, setAccess] = useState(null)

    useEffect(()=>{
    async function routePro(){
    const response = await getme();
    setAccess(response);
    }
    routePro()
    },[])

   
    if(access === false){
       return <Navigate to="/login" />
    }

    return children;
}


export default ProtectedRoute