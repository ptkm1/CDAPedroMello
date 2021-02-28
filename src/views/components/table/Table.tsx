import { useContext, useEffect, useState } from "react";
import { tabela } from "../../../infra/services/fakeapi";
import { ComponentsContext } from "../../../useCases/contexts/Components/ComponentsContexts";
import { GrayButton } from "../buttons/CommonButtons";
import {
  ColumnTable,
  Name,
  Rg,
  TableLayout,
  DataIdentificacao,
  StatusPgto,
  NossoNumero,
  CnpjSsp,
  Cpf,
  CnpjCpf,
  StatusInserçao,
  TipoDTX,
  DTPagamento,
  Inserir,
} from "./styles";

import { BiPlus, BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import Informations from "./Informations";
import Requisition from "../../../useCases/tabelaDeControle/Requisition";
import { api } from "../../../infra/services/api";

function Table() {


  const { modalOpen, setModalOpen, setIdEntity } = useContext(
    ComponentsContext
  );

  const [ tabela1, setTabela ]:any = useState()

  useEffect(()=>{

    async function getTable() {

      const data_escolhida: any = sessionStorage.getItem("CDAdataControle")
  
      try {
        
        const { data } = await api.post("/cda/listarcolunas", { data_prestacao: JSON.parse(data_escolhida) })
  
        if(!data) throw new Error()
  
        return setTabela(data.objeto)
  
      } catch (error) {
  
        alert(error.response.data.mensagem)
  
      }
  
    }

    getTable()

  },[])

  return (
    <TableLayout>
      <Informations>
        <h3>Valor total: 50R$</h3>
        <h3>Valor pendente: 0R$</h3>
        <h3>Aguardando inserção: 5</h3>
      </Informations>
      <ColumnTable>
        <Name>Nome</Name>
        <Rg>RG</Rg>
        <DataIdentificacao>Dt. de Identificação</DataIdentificacao>
        <StatusPgto>Status pagamento</StatusPgto>
        <NossoNumero>Nosso Nº</NossoNumero>
        <CnpjSsp>CNPJ-SSP</CnpjSsp>
        <Cpf>CPF</Cpf>
        <CnpjCpf>Cpf / CNPJ</CnpjCpf>
        <DTPagamento>Dt. de pagamento</DTPagamento>
        <TipoDTX>Tipo DTX</TipoDTX>
        <StatusInserçao>Status de inserção</StatusInserçao>
        <Inserir>Inserir</Inserir>
      </ColumnTable>
      
      { tabela1 ? tabela1.map( (e:any) => (
        <ColumnTable key={e.id}>
          <Name>{e.nome}</Name>
          <Rg>{e.rg}</Rg>
          <DataIdentificacao>{ e.data_de_identificacao }</DataIdentificacao>
          <StatusPgto>{ e.status_do_pagamento }</StatusPgto>
          <NossoNumero>{ e.nosso_numero }</NossoNumero>
          <CnpjSsp>
            { e.cnpj_ssp && <BiCheckCircle color="green" size="23px" /> }
          </CnpjSsp>
          <Cpf>{ e.cpf && <BiCheckCircle color="green" size="23px" /> }</Cpf>
          <CnpjCpf>{ e.cpf_ou_cnpj }</CnpjCpf>
          <DTPagamento>{ e.data_de_pagamento }</DTPagamento>
          <TipoDTX>{ e.tipo_dtx }</TipoDTX>
          <StatusInserçao>
            { e.status_insercao == "false" ? (
              <BiErrorCircle color="red" size="23px" />
              ) : (
              <BiCheckCircle color="green" size="23px" />
            ) }
          </StatusInserçao>
          <Inserir>  
            <GrayButton
              onClick={() => {
                setModalOpen(!modalOpen);
                setIdEntity(`${e.id}`);
              }}
            >
              <BiPlus />
            </GrayButton>
          </Inserir>
        </ColumnTable>
      ) ) : <h1>Carregando..</h1> }
    </TableLayout>
  );
}

export default Table;