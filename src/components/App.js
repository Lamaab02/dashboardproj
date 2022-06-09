import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/authContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login"
import Private from "./Private"
import ForgotPassword from './ForgotPassword'
import Update from './Update'
import Calendar from "./Calendar";

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100hv"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Router>
          <AuthProvider>
            <Routes>
            <Route path="/"
            element={<Private><Dashboard /></Private>}></Route>
            <Route path="/calendar"
            element={<Private><Calendar /></Private>}></Route>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/update-profile' element={<Update/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
            </Routes>

          </AuthProvider>
        </Router>
      </div>
      
      </Container>
  

  )
}

export default App;
