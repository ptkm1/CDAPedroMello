import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../views/templates/home'
import Controle from '../../views/templates/rotasProtegidas/controle'

function AutenticatedRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/controlereg" component={ Controle } />
    </BrowserRouter>
  )
}
export default AutenticatedRoutes