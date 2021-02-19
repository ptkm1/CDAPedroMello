import { useCallback, useState } from "react"
import { LoginLogic } from "../../useCases/Login"

function LoginForm() {

  const [ data,setData ]:any = useState()
  
  const Login = useCallback(()=>{

  },[])

  return (
    <form onSubmit={ e=> { 
    e.preventDefault()
    setData(e.target) } 
    } >
      <input name="name" type="text"/>
      <button>Enviar</button>
    </form>
  )
}

export default LoginForm