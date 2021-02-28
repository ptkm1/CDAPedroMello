import { FormEvent, useCallback, useContext, useRef } from "react"
import { ContextAuthenticate } from "../../../infra/providers/auth/AuthContext"
import { api } from "../../../infra/services/api"
import { BlueButton } from "../buttons/CommonButtons"
import { FormDesign } from "../formPosto/styles"
import { Input, InputGroup, Label } from "../uiKits/input"


function FormPosto() {

  // Deixar aqui Logica pra pegar dados do storage pelo context.
  const { User } = useContext(ContextAuthenticate)

  const dataRef: any = useRef()

  const SelecionarPosto = async (e: FormEvent)=>{

    e.preventDefault()

    try {

      let dataFormatada = dataRef.current?.value.split("-")

      let dia = dataFormatada[2]
      let mes = dataFormatada[1]
      let ano = dataFormatada[0]

      let obj = `${dia}-${mes}-${ano}`
      
      const { data } = await api.post("/cda/listarcolunas", { data_prestacao: obj })

      if(!data) throw new Error()

      

      sessionStorage.setItem("CDAdataControle", JSON.stringify(obj))

      return window.location.href = "/controlereg"

    } catch (error) {
      alert(error.response.data.mensagem)
    }

  }

  return (
    <FormDesign onSubmit={ SelecionarPosto } >
      <InputGroup>
        <Label htmlFor="username">Usuário</Label>
        <Input name="name" id="username" value={ User.usuario.nome } type="text" disabled />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="prestaçao_contas">Data p/ prestação de contas</Label>
        <Input name="prestaçao_contas" id="prestaçao_contas" ref={dataRef} type="date" />
      </InputGroup>
      
      <button>Enviar</button>
    </FormDesign>
  )
}

export default FormPosto