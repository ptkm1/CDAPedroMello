import styled from 'styled-components';

export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: auto;

  width: 90%;
  height: 80vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ColumnTable = styled.div`
  width: 99%;
  height: 80px;
  display: flex;

  justify-content: space-around;
  align-items: center;
  text-align: center;
  text-justify: center;

  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(196, 196, 196, 0.25);
  border-radius: 9px;
  border-radius: 15px;
  margin-top: 15px;
`;

export const Name = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-justify: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const Rg = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const DataIdentificacao = styled.h3`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const StatusPgto = styled.h3`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const NossoNumero = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const CnpjSsp = styled.h3`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const Cpf = styled.h3`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`
export const CnpjCpf = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`
export const DTPagamento = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`


export const TipoDTX = styled.h3`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const StatusInserçao = styled.h3`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
  border-right: solid 1px rgba(196, 196, 196, 0.18);
`

export const Inserir = styled.h3`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #3682F9;
`

export const InformationsComponent = styled.div`
  width: 50%;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  color: #3682F9;
`
