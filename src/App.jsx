import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Protectedroute from "./components/Protectedroute"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/dashboard" element={
              <Protectedroute>
                <Dashboard />
              </Protectedroute>}>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App