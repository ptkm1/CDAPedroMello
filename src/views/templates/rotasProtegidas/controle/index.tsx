import { useContext } from 'react'
import { ComponentsContext } from '../../../../useCases/contexts/Components/ComponentsContexts'
import Menu from '../../../components/menu'
import Modal from '../../../components/ModalControleRegistro/Modal'
import Table from '../../../components/table/Table'
import { Container } from '../../../design/Layout'

export default function Controle() {

  const { modalOpen } = useContext(ComponentsContext)

  return (
    <>
  <Menu />
  { modalOpen && <Modal /> }
   <Container>
     <Table />
   </Container>
   </>
  )
}
