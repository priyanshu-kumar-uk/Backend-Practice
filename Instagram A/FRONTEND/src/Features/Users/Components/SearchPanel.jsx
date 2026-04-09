import React from 'react'
import {useSelector} from 'react-redux'
import { users } from '../Hooks/userHook'
const SearchPanel = () => {
 let data =  useSelector((state)=>state.users.usersearch)
 let getMe =  useSelector((state)=>state.auth.user)

let{followUsers} =  users()

function handleFollow(userId){
   followUsers({userId})
}

  return (
    <div className="insta-search-list">
     {
      data&&data.map((elem)=>{
        return  <div className="insta-search-item" key={elem._id || elem.username}>
        <img className="insta-search-avatar" src={elem.profileImage} alt={elem.username || "profile"} />
        <div className="insta-search-meta">
          <strong>{elem.username}</strong>
          <p>{elem.fullname}</p>
        </div>
         {
         getMe._id !== elem._id &&  <button type="button" className="insta-search-follow-btn" onClick={()=>handleFollow(elem._id)} >{elem.followstatus?elem.followstatus:"Follow"}</button>
         }
      </div>
      })
     }
    </div>
  )
}

export default SearchPanel
