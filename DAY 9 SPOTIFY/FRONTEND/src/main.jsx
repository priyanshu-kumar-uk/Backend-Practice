import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './app/App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './app/Router/Authrouter.jsx'
import { AuthProvider } from './Context/Usercontext.jsx'


createRoot(document.getElementById('root')).render(
       <AuthProvider>
              <RouterProvider router={router}/>
       </AuthProvider>
)
