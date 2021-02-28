import { FormEvent, useCallback, useContext, useRef, useState } from "react"
import { ComponentsContext } from "../../../useCases/contexts/Components/ComponentsContexts"
import { CloseModalButton } from "../buttons/CloseModal"
import { BlueButton } from "../buttons/CommonButtons"
import {
  FormModal,
  CommonLabelInputColumn,
  ModalInputGroup,
  Input,
  ModalOptionsGroup,
  UserLoggedIn,
} from "./FormStyles"
import { ConditionalIsent, Container, Left, Right } from "./styles"
import { BiXCircle } from "react-icons/bi"
import ConditionalModal from "./ConditionalModal"
import { ContextAuthenticate } from "../../../infra/providers/auth/AuthContext"
import { api } from "../../../infra/services/api"

function Modal() {
  
  const { modalOpen, setModalOpen, idEntity } = useContext(ComponentsContext)
  const { User } = useContext(ContextAuthenticate)

  console.log(User)


  const [Option, setOption]: any = useState()
  const [isento, setIsento]: any = useState(null)

  const NossoNRef: any = useRef()
  const dataRef: any = useRef()
  const cpfoucnpjRef: any = useRef()


  const RegistrarControle = async (e:FormEvent) => {
    e.preventDefault()
    
    try {

      let dataFormatada = dataRef.current?.value.split("-")

      let dia = dataFormatada[2]
      let mes = dataFormatada[1]
      let ano = dataFormatada[0]

      let FinalData = `${dia}-${mes}-${ano}`

      
      const dados = {
        id: idEntity,
        status_do_pagamento: "Pago",
        nosso_numero:NossoNRef.current?.value,
        cnpj_ssp: Option === 1 ? "true" : "",
        cpf:  Option === 0 ? "true" : "",
        cpf_ou_cnpj: cpfoucnpjRef.current?.value,
        data_de_pagamento: FinalData, 
        // tipo_dtx, 
        status_insercao: "true" 
      }

      const { data } = await api.patch('/cda/atualizarcoluna', dados )

      alert(data.mensagem)

      return window.location.reload()

    } catch (error) {
      alert("Erro!")
    }

  }

  

  return (
    <Container>
      { modalOpen ? (
            <CloseModalButton onClick={ () => setModalOpen( !modalOpen ) }> 
              <BiXCircle />
            </CloseModalButton>
          ) : (<></>) }
      <ConditionalIsent>
        <BlueButton onClick={ () => setIsento(1) }>Isento</BlueButton> ou
        <BlueButton onClick={ () => setIsento(0) }>Não isento</BlueButton>
      </ConditionalIsent>

      {isento === 0 && (
        <Container>
          { modalOpen ? (
            <CloseModalButton onClick={ () => setModalOpen( !modalOpen ) }> 
              <BiXCircle />
            </CloseModalButton>
          ) : (<></>) }
          <UserLoggedIn>
            <h2>Solicitante: { User.usuario.nome } </h2>
            <h2>RG: { User.usuario.id } </h2>
          </UserLoggedIn>
          <Left>
            <FormModal onSubmit={ RegistrarControle } >
              <ModalInputGroup>
                <CommonLabelInputColumn htmlFor="NossoNumero">
                  Nosso nº
                </CommonLabelInputColumn>
                <Input
                  type="text"
                  id="NossoNumero"
                  placeholder="Digite o nosso numero"
                  ref={NossoNRef}
                />
              </ModalInputGroup>
              <ModalOptionsGroup>
                <BlueButton onClick={ () => setOption(1) }>CNPJ-SSP</BlueButton>
                <BlueButton onClick={ () => setOption(0) }>CPF</BlueButton>
                { Option === 1 && ( <Input type="text" ref={cpfoucnpjRef} placeholder="Digite o CNPJ" /> ) }
                { Option === 0 && ( <Input type="text" ref={cpfoucnpjRef} placeholder="Digite o CPF" /> ) }
              </ModalOptionsGroup>
              <ModalInputGroup>
                <CommonLabelInputColumn htmlFor="data">
                  Data
                </CommonLabelInputColumn>
                <Input type="date" id="data" ref={dataRef} />
              </ModalInputGroup>

              <button type="submit" >Enviar</button>
            </FormModal>
          </Left>
          <Right>
            <h1>{ idEntity }</h1>
          </Right>
        </Container>
      )}
      { isento === 1 && <ConditionalModal /> }
      </Container>
  )
}

export default Modal
