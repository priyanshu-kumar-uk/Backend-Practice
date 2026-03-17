import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import { getme } from "../Service/authApi";

const Dashbord = () => {

  let{user,setUser} = useContext(AuthContext)

 console.log(user)
  return (
    <div className="dashbord">
      <h1>Welcome META MUSIC</h1>
      <button>Uplode Song</button>
    </div>
  );
};

export default Dashbord;
