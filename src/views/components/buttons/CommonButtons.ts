import styled from 'styled-components';

export const GrayButton = styled.div`
  border: none;
  width: 40px;
  height: 40px;
  background: #DDDDDD;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3682F9;
  cursor: pointer;

  :hover {
    background: #DDDD;
  }
`;

export const BlueButton = styled.a`
  border: none;
  width: ${ (prop:any) => prop.width || "80px"};
  height: ${ (prop:any) => prop.height || "40px"};
  background: #3682F9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #DDDD;
  cursor: pointer;
  margin: 10px;

  :hover {
    background: white;
    color: #3682F9;
  }
`;