import React, { createContext, useEffect, useState } from 'react'
import { IAuthContext } from './IAuthContext'

const ContextAuthenticate = createContext( {} as IAuthContext )

function AuthenticateProvider( { children }:any ) {

  const [ User, setUser ]:any = useState({ name: "sande" })

  useEffect(()=>{

    const token: string | null = localStorage.getItem("CDAToken")
    
    if(token) {
      setUser(JSON.parse(token))
    }

  },[])

  return (
    <ContextAuthenticate.Provider value={{ signed: Boolean(User), User }} >
      { children }
    </ContextAuthenticate.Provider>
  )
}
export { ContextAuthenticate }
export default AuthenticateProvider