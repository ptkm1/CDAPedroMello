import { Container, RadioBody, RadioButton, RadioButtonLabel } from "./styles"

function GroupRadioButtons() {

  const RadiosOptions: any = [
    { id: 1,title: "Morador de rua em posse de ofício" },
    { id: 2,title: "Erro na identificação anterior" },
    { id: 3,title: "Acima de 65 anos e carente" },
    { id: 4,title: "Não alfabetizado que passou por curso de alfabetização" },
    { id: 5,title: "Convênio/Comitê/Liminar" },
    { id: 6,title: "Doença crônica ou mental e carência" }
  ]

  return (
    <Container>
    { RadiosOptions.map( (options: any) => (
      <RadioBody key={ options.id }>
      <RadioButton value={ options.title } type="radio" id={ `opt${ options.id }` } name="options" />
      <RadioButtonLabel htmlFor={ `opt${options.id}` } >{ options.title }</RadioButtonLabel>
      </RadioBody>
      )) }
  </Container>
  )
}

export default GroupRadioButtons