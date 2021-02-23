import { useContext } from "react";
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
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "node:constants";
import Informations from "./Informations";

function Table() {
  const { modalOpen, setModalOpen, setIdEntity } = useContext(
    ComponentsContext
  );

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
      {tabela.map((e) => (
        <ColumnTable key={e.id}>
          <Name>{e.nome}</Name>
          <Rg>{e.rg}</Rg>
          <DataIdentificacao>{e.data_De_Identificaçao}</DataIdentificacao>
          <StatusPgto>{e.status_Pgto}</StatusPgto>
          <NossoNumero>{e.nossoN}</NossoNumero>
          <CnpjSsp>
            {e.cnpj_Ssp && <BiCheckCircle color="green" size="23px" />}
          </CnpjSsp>
          <Cpf>{e.cpf && <BiCheckCircle color="green" size="23px" />}</Cpf>
          <CnpjCpf>{e.cpf_cnpj}</CnpjCpf>
          <DTPagamento>{e.dt_Pgto}</DTPagamento>
          <TipoDTX>{e.tipo_dtx}</TipoDTX>
          <StatusInserçao>
            {e.status_inserçao ? (
              <BiCheckCircle color="green" size="23px" />
            ) : (
              <BiErrorCircle color="red" size="23px" />
            )}
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
      ))}
    </TableLayout>
  );
}

export default Table;