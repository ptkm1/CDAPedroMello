import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const RadioBody = styled.div`
  width: max-content;
  height: max-content;
  margin: 15px;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const RadioButtonLabel = styled.label`
  width: 200px;
  height: max-content;
  padding: 15px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3682F9;
  transition: all 0.7s;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    background-color: #3682F9;
    color: white;
  }
`;

export const RadioButton = styled.input`
   display: none;
   :checked ~ ${RadioButtonLabel} {
    background-color: #3682F9;
    color: white;
  }
`