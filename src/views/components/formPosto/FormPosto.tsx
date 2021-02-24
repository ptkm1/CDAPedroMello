import { useContext, useState } from "react"
import { ContextAuthenticate } from "../../../infra/providers/auth/AuthContext"
import { BlueButton } from "../buttons/CommonButtons"
import { FormDesign } from "../formPosto/styles"
import { Input, InputGroup, Label } from "../uiKits/input"


function FormPosto() {

  const [ data, setData ]:any = useState()

  // Deixar aqui Logica pra pegar dados do storage pelo context.
  const { User } = useContext(ContextAuthenticate)

  return (
    <FormDesign onSubmit={ e => { 
      e.preventDefault()
      setData(e.target) } } >
      <InputGroup>
        <Label htmlFor="username">Usuário</Label>
        <Input name="name" id="username" value={ User.name } type="text" disabled />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="prestaçao_contas">Data p/ prestação de contas</Label>
        <Input name="prestaçao_contas" id="prestaçao_contas" type="date" />
      </InputGroup>
      
      <BlueButton>Enviar</BlueButton>
    </FormDesign>
  )
}

export default FormPosto