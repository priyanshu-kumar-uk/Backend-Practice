import React, { useContext } from 'react'
import {Link, Navigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { AuthContext } from '../Apicontext'
import {registers} from '../service/auth.api.js'
import {useNavigate} from 'react-router-dom'
const Registers = () => {

 let navigate = useNavigate()    
 let{user,setUser} = useContext(AuthContext)

 let{register,handleSubmit,reset,formState:{errors}} = useForm()

    async function formRegister(data){
     let registerData =   await registers(data.email,data.password,data.userType)
       setUser(registerData)
       navigate("/login")
       reset()
    }

  return (
    <div className='register'>
        <div className="register-form">
            <form onSubmit={handleSubmit(formRegister)}>
                 <input type="Email" placeholder='Enter Email'
                 {...register("email",{required:true})}
                 />
                 <input type="Password" placeholder='Enter Password'
                 {...register("password",{required:true})}
                 
                 />
                 <div className="radios">
                     <div className="radio">
                          <label>User</label>
                          <input type="radio" value="user" 
                          {...register("userType",{required:true})}                        
                          />
                     </div>
                      <div className="radio">
                        <label >Artist</label>
                      <input type="radio"  value="artist" 
                          {...register("userType",{required:true})}                        
                      
                      />
                      </div>
                 </div>
                 <button>Register</button>                 
            </form>
           <div className="another">
             <h5>User have a Account</h5>
             <Link to= "/login">Login</Link>
           </div>
        </div>
    </div>
  )
}

export default Registers