import { createContext, useState } from "react";

export let AuthContext =   createContext()

export let  AuthProvider = ({children})=>{
  
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)
    const [songs, setSongs] = useState([])
     const [currentsong, setCurrentsong] = useState(null)

    return(  
    <AuthContext.Provider value={{user,setUser,loading,setLoding,songs,setSongs,currentsong,setCurrentsong}}>
        {children}
    </AuthContext.Provider>
)
    
}