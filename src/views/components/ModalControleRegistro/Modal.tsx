import { useContext, useState } from "react";
import { ComponentsContext } from "../../../useCases/contexts/Components/ComponentsContexts";
import { CloseModalButton } from "../buttons/CloseModal";
import { BlueButton } from "../buttons/CommonButtons";
import { FormModal, CommonLabelInputColumn, ModalInputGroup, Input, ModalOptionsGroup } from "./FormStyles";
import { Container, Left, Right } from './styles'
import { BiXCircle } from 'react-icons/bi'

function Modal() {
  
  const { modalOpen, setModalOpen, idEntity } = useContext(ComponentsContext);

  const [ Option, setOption ]: any = useState()
  
  return (
    <>
    <Container>
    { modalOpen ? ( <CloseModalButton onClick={() => setModalOpen(!modalOpen)}> <BiXCircle /> </CloseModalButton> ) : (<></>) }
    <Left>
      <FormModal>
        <ModalInputGroup>
          <CommonLabelInputColumn htmlFor="NossoNumero" > Nosso nº </CommonLabelInputColumn>
          <Input type="text" id="NossoNumero" placeholder="Digite o nosso numero" />
        </ModalInputGroup>
        <ModalOptionsGroup>
          <BlueButton onClick={ () => setOption(1) } >CNPJ-SSP</BlueButton>
          <BlueButton onClick={ () => setOption(0) } >CPF</BlueButton>
          { Option === 1 && (<Input type="text" placeholder="Digite o CNPJ" />) }
          { Option === 0 && (<Input type="text" placeholder="Digite o CPF" />) }
        </ModalOptionsGroup>
      <ModalInputGroup>
        <CommonLabelInputColumn htmlFor="data">Data</CommonLabelInputColumn>
        <Input type="date" id="data" />
      </ModalInputGroup>

        <BlueButton>Enviar</BlueButton>
      </FormModal>
    </Left>
    <Right>
      <h1>{ idEntity }</h1>
    </Right>
    </Container>
    </>
  );
}

export default Modal;
