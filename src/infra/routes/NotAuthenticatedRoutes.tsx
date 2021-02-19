import { BrowserRouter, Route } from "react-router-dom"

function NotAuthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" />
    </BrowserRouter>
  )
}

export default NotAuthenticatedRoutes