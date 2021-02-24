import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${ (prop:any) => prop.wth || "100%"};
`;

export const Input = styled.input`
  background: white;
  border: none;
  height: 50px;
  margin-top: 10px;
  padding-left: 15px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #3682F9
`