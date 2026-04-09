import React, { useEffect, useState } from 'react'
import SearchPanel from '../Components/SearchPanel.jsx'
import { users } from '../Hooks/userHook.js'

const SearchPage = () => {
  const [query, setquery] = useState("")
  
  let{searchUsers} = users()
  
  useEffect(()=>{
    
    if(!query.trim()) return;

    const timer = setTimeout(()=>{  // after run 5 sec 
        searchUsers({query})
    },500)

    return () => clearTimeout(timer)  // user type on einput run this decree counting than second agin strt currnt timeing 

  },[query])  

  


  return (
    <section className="insta-panel-card insta-side-panel">
      <div className="insta-panel-heading">
        <h2>Search</h2>
      </div>
      <input 
      className="insta-search-input" 
      type="text"
      placeholder="Search here..."
      value = {query}
      onChange={(e)=> setquery(e.target.value) }
      />
      <SearchPanel />
    </section>
  )
}

export default SearchPage
