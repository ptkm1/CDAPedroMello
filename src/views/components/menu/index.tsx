import { Left, MenuBody, OptionMenu, Right } from "./styles";


export default function Menu() {
  return (
    <MenuBody>
      <Left>
        <img src="http://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png" alt="Logo"/>
      </Left>
      <Right>

        <OptionMenu href="/">Home</OptionMenu>
        <OptionMenu href="/controlereg">Tabela</OptionMenu>
        <OptionMenu href="#">S3</OptionMenu>
      </Right>
    </MenuBody>
  )
}
