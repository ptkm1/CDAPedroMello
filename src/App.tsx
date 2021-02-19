import React from 'react'
import AuthenticateProvider from './infra/providers/auth/AuthContext'
import { Routes } from './infra/routes'

function App() {
  return (
    <AuthenticateProvider>
      <Routes />
    </AuthenticateProvider>
  )
}
export default App