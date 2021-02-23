import styled from 'styled-components';

export const FormModal = styled.form`
  width: 100%;
`;

export const ModalInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const ModalOptionsGroup = styled.div`
  display: flex;
`

export const CommonLabelInputColumn = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #3682F9;
`

export const Input = styled.input`
  background: white;
  border: none;
  height: 50px;
  margin-top: 10px;
  padding-left: 15px;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  background: white;
  border: none;
  height: 100px;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;

  resize: none;
`

export const ChooseStatus = styled.button`
  width: 150px;
  height: 50px;
`

export const UserLoggedIn = styled.div`
  position: fixed;
  top: 15%;
  display: flex;
  flex-direction: column;

  h2 { 
    color: #3682F9;
    font-weight: bold;
  }
`

