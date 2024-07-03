import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})


export function UsercontextProvider({children}){
    const[user, setUser] = useState(null)

    useEffect(()=>{
        if(!user){
            axios.get('http://localhost:3000/api/v1/users/getuser', {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              }).then(res=>{
                setUser(res.data.user)
                console.log(res.data.user)
            })
            
        }
    },[])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


