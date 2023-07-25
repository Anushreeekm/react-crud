import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom' /* { } => const/ typed/ named imports */
import Menu from "./component/Menu" /* deafult imports */
import Pnf from "./component/Pnf"
import Home from "./component/Home"
import Create from "./component/Create"
import Update from "./component/Update"
import Register from "./component/Auth/Register"
import Login from "./component/Auth/Login"
import PrivateRouter from "./PrivateRoute/PrivateRouter"


function App(props) {
  return (
  <BrowserRouter>
      <Menu />
      <Routes>
        <Route element={<PrivateRouter/>}>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/create'} element={<Create/>} />
          <Route path={'/update/ :id'} element={<Update/>} />
        </Route>
      <Route path={'/login'} element={<Login/>} />
      <Route path={'/register'} element={<Register/>} />
      <Route path={'/'} element={<Pnf/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App