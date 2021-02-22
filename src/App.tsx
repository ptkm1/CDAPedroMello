import React from 'react'
import AuthenticateProvider from './infra/providers/auth/AuthContext'
import { Routes } from './infra/routes'
import ComponentsProvider from './useCases/contexts/Components/ComponentsContexts'

function App() {
  return (
    <AuthenticateProvider>
      <ComponentsProvider>
        <Routes />
      </ComponentsProvider>
    </AuthenticateProvider>
  )
}
export default App