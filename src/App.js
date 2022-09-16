//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {  Routes, Route, Link, } from 'react-router-dom'
import Login from './Component/SignIn'
import SignUp from './Component/Signup';
import PaymentOpt from './Component/PaymentsOpt';
import Fpay from './Component/Fpay';





function App() {
  
  

  return (
    
   // <Router>
      <div className="App">
      
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/SignIn'}>
                
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/SignIn'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Signup'}>
                    Sign up
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/SignIn" element={<Login />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/PaymentsOpt" element={<PaymentOpt />} />
              <Route path="/Fpay" element={<Fpay />} />
              
             </Routes>
          </div>
        </div>
        
      </div>
    
    //</Router>
    
  );
}

export default App;
