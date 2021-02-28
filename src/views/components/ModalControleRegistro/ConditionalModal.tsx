import { FormEvent, useContext, useRef, useState } from "react";
import { BiXCircle } from "react-icons/bi";
import { ContextAuthenticate } from "../../../infra/providers/auth/AuthContext";
import { api } from "../../../infra/services/api";
import { ComponentsContext } from "../../../useCases/contexts/Components/ComponentsContexts";
import { CloseModalButton } from "../buttons/CloseModal";
import { BlueButton } from "../buttons/CommonButtons";
import GroupRadioButtons from "../radioButtons/GroupRadioButtons";
import { CommonLabelInputColumn, FormModal, Input, ModalInputGroup, TextArea, UserLoggedIn } from "./FormStyles";
import { Container, Left } from "./styles";

function ConditionalModal() {
  const { modalOpen, setModalOpen, idEntity, radioButtonValue } = useContext(ComponentsContext);

  const { User } = useContext(ContextAuthenticate)

  const ObservacaoRef: any = useRef()


  const RegistrarControleConditional = async ( e:FormEvent ) => {

    e.preventDefault()

    try {
      
      const dados = 
      { id: idEntity,
        status_do_pagamento: "Não pago",
        situacao_isento: radioButtonValue,
        observacao_isento: ObservacaoRef.current?.value,
        status_insercao: "true" }


      const { data } = await api.patch('/cda/atualizarcoluna', dados)

      console.log(data)

    } catch (error) {

      alert(error.mensagem)

    }




  }

  return (
    <Container>
      { modalOpen ? (
        <CloseModalButton onClick={() => setModalOpen( !modalOpen )}>
          <BiXCircle />
        </CloseModalButton>
      ) : (
        <></>
      ) }

      <UserLoggedIn>
        <h2>Solicitante: { User.usuario.nome } </h2>
        <h2>RG: { User.usuario.id } </h2>
      </UserLoggedIn>
      <Left>

        <FormModal onSubmit={ RegistrarControleConditional } >


        <GroupRadioButtons />

        <ModalInputGroup>
          <CommonLabelInputColumn htmlFor="Observação">
              Observação
          </CommonLabelInputColumn>
          <TextArea
              id="Observação"
              placeholder="Escreva uma observação"
              ref={ ObservacaoRef }
          />
        </ModalInputGroup>

        <button>Enviar</button>

        </FormModal>
        
      </Left>
    </Container>
  );
}

export default ConditionalModal;
