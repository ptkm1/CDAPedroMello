import { useContext } from "react"
import { ContextAuthenticate } from "../providers/auth/AuthContext"

import AutenticatedRoutes from "./AutenticatedRoutes"
import NotAuthenticatedRoutes from "./NotAuthenticatedRoutes"

function Routes():any {

  const { signed } = useContext(ContextAuthenticate)

  return signed ? <AutenticatedRoutes /> : <NotAuthenticatedRoutes />
  
}

export { Routes }