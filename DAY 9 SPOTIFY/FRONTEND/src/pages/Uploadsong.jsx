import React from 'react'
import { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import { getme } from "../Service/authApi";
import { useState } from 'react';
import { useSong } from '../Hooks/song';

const Uploadsong = () => {
//  let{user,setUser,loading} = useContext(AuthContext)

//   useEffect(()=>{
//    async function userDta(){
//         let res = await getme()
//         console.log(res.decodeData.userType)
//         setUser(res.decodeData)
//     }
//     userDta()
//   },[])

//   if(user?.userType !== "artist" && !loading ){
//     return <Navigate to="/metaMusic"/>
//   }

  let{handlecreateSong} = useSong()

  


  return (
    <div>
          <div className="song-form">
            <form>
                <label>
                    select Audio file
                </label>

                <input type="file" name = "song" accept='audio/*' required />

                <button>Uplode song</button>
            </form>
          </div>
          
    </div>
  )
}

export default Uploadsong