import React, { createContext, useState } from 'react'
import { IAuthContext } from './IAuthContext'

const ContextAuthenticate = createContext( {} as IAuthContext )

function AuthenticateProvider( { children }:any ) {

  const [ User, setUser ]:any = useState({ name: "Sande" })

  return (
    <ContextAuthenticate.Provider value={{ signed: Boolean(User), User }} >
      { children }
    </ContextAuthenticate.Provider>
  )
}
export { ContextAuthenticate }
export default AuthenticateProvider