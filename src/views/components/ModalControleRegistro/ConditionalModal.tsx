import { useContext } from "react";
import { BiXCircle } from "react-icons/bi";
import { ComponentsContext } from "../../../useCases/contexts/Components/ComponentsContexts";
import { CloseModalButton } from "../buttons/CloseModal";
import { BlueButton } from "../buttons/CommonButtons";
import GroupRadioButtons from "../radioButtons/GroupRadioButtons";
import { CommonLabelInputColumn, FormModal, Input, ModalInputGroup, TextArea, UserLoggedIn } from "./FormStyles";
import { Container, Left } from "./styles";

function ConditionalModal() {
  const { modalOpen, setModalOpen, idEntity } = useContext(ComponentsContext);

  const UserInformations: any = { name: "UserTest", IDNumber: "123456789" };

  return (
    <Container>
      {modalOpen ? (
        <CloseModalButton onClick={() => setModalOpen(!modalOpen)}>
          <BiXCircle />
        </CloseModalButton>
      ) : (
        <></>
      )}

      <UserLoggedIn>
        <h2>Solicitante: {UserInformations.name} </h2>
        <h2>RG: {UserInformations.IDNumber} </h2>
      </UserLoggedIn>
      <Left>

        <FormModal>


        <GroupRadioButtons />

        <ModalInputGroup>
          <CommonLabelInputColumn htmlFor="Observação">
              Observação
          </CommonLabelInputColumn>
          <TextArea
              id="Observação"
              placeholder="Escreva uma observação"
          />
        </ModalInputGroup>

        <BlueButton>Enviar</BlueButton>

        </FormModal>
        
      </Left>
    </Container>
  );
}

export default ConditionalModal;
