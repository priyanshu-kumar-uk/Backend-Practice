import { useState } from "react";
import { createContext } from "react";

 export let AuthContext = createContext()

 export let AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
                                                 
    return(
        <AuthContext.Provider value={{user,setUser}}>
         {children}
        </AuthContext.Provider>
    )
}