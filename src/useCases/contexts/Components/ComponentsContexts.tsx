import React, { createContext, useState } from 'react'
import { IComponentsContext } from './IComponentsContext'

const ComponentsContext = createContext( {} as IComponentsContext )

function ComponentsProvider( { children }:any ) {

  const [ modalOpen, setModalOpen ]: any = useState(false)
  const [ idEntity, setIdEntity ]: any = useState()
  const [ radioButtonValue, setRadioButtonValue ]: any = useState()

  return (
    <ComponentsContext.Provider value={{
      modalOpen,
      setModalOpen,
      idEntity, setIdEntity,
      setRadioButtonValue,
      radioButtonValue
    }} >
      { children}
    </ComponentsContext.Provider>
  )
}

export { ComponentsContext }
export default ComponentsProvider