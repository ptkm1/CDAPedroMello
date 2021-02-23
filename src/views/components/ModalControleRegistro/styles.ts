import styled from 'styled-components';

export const Container = styled.div`
  background: #DDDDDD;
  background-blend-mode: screen;
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;

  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  padding: 35px;
`;

export const Left = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ConditionalIsent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3682F9;
  font-weight: bold;
`