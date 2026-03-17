import React from 'react'
import {Link} from 'react-router'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {login} from '../Service/authApi.js'
import {userAuth} from '../Hooks/auth.js'

const Login = () => {
  let{register,handleSubmit,reset,formState:{errors}}= useForm()
  let navigate = useNavigate()

  let{handleLogin} = userAuth()

 async function loginForm(data){
   let response = await handleLogin(data)
   
    alert(response.message)
    reset()
    navigate("/metaMusic")
  }
  return (
    <div className='register'>
        <div className="register-form">
            <form onSubmit={handleSubmit(loginForm)}>
                 <input type="Email" placeholder='Enter Email'
                   {...register("email",{required:true})}
                 />
                 <input type="Password" placeholder='Enter Password'    
                   {...register("password",{required:true})}
                 />                 
                 <button>Login</button>                 
            </form>
           <div className="another">
             <h5>User don't have a Account</h5>
             <Link to="/register" className='link-tag'>Register</Link>
           </div>
        </div>
    </div>
  )
}

export default Login