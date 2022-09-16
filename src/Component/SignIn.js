
//import React, { Component } from 'react'
import React from "react"
//import { useNavigate } from "react-router-dom";

//export default class Login extends Component {
  
  
 //render()
 // {
 function Login(){
  
  //const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to 
    //navigate('/PaymentsOpt');
  };
  
  
    
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
       
        <div className="d-grid">
          <button   type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#/">password?</a>
        </p>
      </form>
    )
    }  
export default Login;
