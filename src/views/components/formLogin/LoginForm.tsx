import { useCallback, useState } from "react"
import { LoginLogic } from "../../../useCases/Login"
import { BlueButton } from "../buttons/CommonButtons"
import { Input } from "../modalControleRegistro/FormStyles"
import { InputGroup, Label } from "../uiKits/input"
import { FormDesign } from "./styles"

function LoginForm() {

  const [ data, setData ]:any = useState()
  
  const Login = useCallback(()=>{

  },[])

  return (
    <FormDesign onSubmit={ e => { 
      e.preventDefault()
      setData(e.target) } } >
      <InputGroup>
        <Label htmlFor="username">Usuário</Label>
        <Input name="name" id="username" type="text"/>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" type="password"/>
      </InputGroup>
      
      <BlueButton>Enviar</BlueButton>
    </FormDesign>
  )
}

export default LoginForm