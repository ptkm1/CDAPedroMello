import styled from 'styled-components';

export const MenuBody = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 35px;

  img { 
    width: 40px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 35px;
`;

export const OptionMenu = styled.a`
  text-decoration: none;
  color: #3682F9;
  margin-left: 10px;

  :hover {
    color: gray;
  }
`;