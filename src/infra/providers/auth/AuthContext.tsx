import React, { createContext, useState } from 'react'
import { IAuthContext } from './IAuthContext'

const ContextAuthenticate = createContext( {} as IAuthContext )

function AuthenticateProvider( { children }:any ) {

  const [ User, setUser ]:any = useState(true)

  return (
    <ContextAuthenticate.Provider value={{ signed: Boolean(User) }} >
      { children }
    </ContextAuthenticate.Provider>
  )
}
export { ContextAuthenticate }
export default AuthenticateProvider