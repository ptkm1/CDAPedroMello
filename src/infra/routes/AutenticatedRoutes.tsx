import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../views/templates/home'

function AutenticatedRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Home } />
    </BrowserRouter>
  )
}
export default AutenticatedRoutes