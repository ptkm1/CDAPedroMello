import { useContext, useState } from "react"
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

function Modal() {
  const { modalOpen, setModalOpen, idEntity } = useContext(ComponentsContext)
  const [Option, setOption]: any = useState()
  const [isento, setIsento]: any = useState(null)

  const UserInformations: any = { name: "UserTest", IDNumber: "123456789" }

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

      {isento == 0 && (
        <Container>
          { modalOpen ? (
            <CloseModalButton onClick={ () => setModalOpen( !modalOpen ) }> 
              <BiXCircle />
            </CloseModalButton>
          ) : (<></>) }
          <UserLoggedIn>
            <h2>Solicitante: { UserInformations.name } </h2>
            <h2>RG: { UserInformations.IDNumber } </h2>
          </UserLoggedIn>
          <Left>
            <FormModal>
              <ModalInputGroup>
                <CommonLabelInputColumn htmlFor="NossoNumero">
                  
                  Nosso nº
                </CommonLabelInputColumn>
                <Input
                  type="text"
                  id="NossoNumero"
                  placeholder="Digite o nosso numero"
                />
              </ModalInputGroup>
              <ModalOptionsGroup>
                <BlueButton onClick={ () => setOption(1) }>CNPJ-SSP</BlueButton>
                <BlueButton onClick={ () => setOption(0) }>CPF</BlueButton>
                { Option === 1 && ( <Input type="text" placeholder="Digite o CNPJ" /> ) }
                { Option === 0 && ( <Input type="text" placeholder="Digite o CPF" /> ) }
              </ModalOptionsGroup>
              <ModalInputGroup>
                <CommonLabelInputColumn htmlFor="data">
                  Data
                </CommonLabelInputColumn>
                <Input type="date" id="data" />
              </ModalInputGroup>

              <BlueButton type="submit" >Enviar</BlueButton>
            </FormModal>
          </Left>
          <Right>
            <h1>{ idEntity }</h1>
            <a href="#">Isento</a>
          </Right>
        </Container>
      )}
      { isento === 1 && <ConditionalModal /> }
      </Container>
  )
}

export default Modal
