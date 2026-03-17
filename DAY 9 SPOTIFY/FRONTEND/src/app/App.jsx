import React from 'react'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div className='main'>
      <div className="mid">
           <h1>WELCOME META MUSIC</h1>
            <div className="tags">
              <Link to= "/login" className='tags-link'>Login</Link>
              <Link to= "/register" className='tags-link'>Register</Link>
            </div>
      </div>
    </div>
  )
}

export default App