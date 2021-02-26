import { FormEvent, useCallback, useRef } from "react"
import { api } from "../../../infra/services/api"
import { Input } from "../ModalControleRegistro/FormStyles"
import { InputGroup, Label } from "../uiKits/input"
import { FormDesign } from "./styles"

function LoginForm() {

  const userRef:any = useRef()
  const passRef:any = useRef()

  const Login = useCallback( async (e: FormEvent)=>{
    e.preventDefault()
    
    const DadosInputados: any = { nome: userRef.current.value, senha: passRef.current.value }

    
    try {
      
      const { data } = await api.post("/cda/autenticarusuariocda", DadosInputados)
      
      
      localStorage.setItem("CDAToken", JSON.stringify(data))

      return window.location.href = "/"

    } catch (error) {
      
      alert("Deu algum erro")
      console.log(error)

    }


  },[])

  return (
    <FormDesign onSubmit={ Login } >
      <InputGroup>
        <Label htmlFor="username">Usuário</Label>
        <Input name="name" id="username" ref={userRef} type="text"/>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" ref={passRef} type="password"/>
      </InputGroup>
      
      <button>Enviar</button>
    </FormDesign>
  )
}

export default LoginForm