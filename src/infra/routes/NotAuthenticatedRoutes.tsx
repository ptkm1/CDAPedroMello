import { BrowserRouter, Route } from "react-router-dom"
import Home from "../../views/templates/home"

function NotAuthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
    </BrowserRouter>
  )
}

export default NotAuthenticatedRoutes