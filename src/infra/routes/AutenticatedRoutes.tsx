import { BrowserRouter, Route } from 'react-router-dom'
import Controle from '../../views/templates/rotasProtegidas/controle'
import EscolhaDoDia from '../../views/templates/rotasProtegidas/escolhaDoDia'

function AutenticatedRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ EscolhaDoDia } />
      <Route path="/controlereg" component={ Controle } />
    </BrowserRouter>
  )
}
export default AutenticatedRoutes