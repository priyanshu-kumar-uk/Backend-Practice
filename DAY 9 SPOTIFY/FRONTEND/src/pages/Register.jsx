import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {userAuth} from '../Hooks/auth.js'
const Register = () => {

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let{user,handleRegister} = userAuth()

 async function registerForm(data) {

  let response = await handleRegister(data)
     alert(response.message)

    navigate("/login");
    reset();
  }

  return (
    <div className="register">
      <div className="register-form">
        <form onSubmit={handleSubmit(registerForm)}>
          <input
          className={errors.email?"input-error":''}
            type="Email"
            placeholder={errors.email? errors.email.message: "Enter Email"}
            {...register("email",
               { required: "Please Enter a Email", 
                 pattern:{
                      value:/^\S+@\S+\.\S+$/,
                      message: "Invalid Email"
                 }
               }
              )
              }
          />
          <input
            type="Password"
            placeholder={errors.password? errors.password.message: "Enter Password"}
            {...register("password", { 
              required: "PLease Enter password" ,
              pattern:{
                value:/^.{6,}$/,
                message:"Password must be at least 6 characters"
              }
            })}
          />
          <div className="radios">
            <div className="radio">
              <label>User</label>
              <input
                type="radio"
                value="user"
                {...register("userType", {required: true })}
              />
            </div>
            <div className="radio">
              <label>Artist</label>
              <input
                type="radio"
                value="artist"
                {...register("userType", { required: true })}
              />
            </div>
          </div>
          <button>Register</button>
        </form>
        <div className="another">
          <h5>User have a Account</h5>
          <Link to="/login" className="link-tag">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
