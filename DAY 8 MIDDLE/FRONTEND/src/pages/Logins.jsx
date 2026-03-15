import React from 'react'
import {Link} from 'react-router'
import {useForm} from 'react-hook-form'
import {login} from '../service/auth.api.js'
const Logins = () => {
let{register,handleSubmit,reset,} = useForm()

async  function loginForm(data){  
   await login(data.email,data.password)
   reset()
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
             <Link to="/register">Register</Link>
           </div>
        </div>
    </div>
  )
}

export default Logins