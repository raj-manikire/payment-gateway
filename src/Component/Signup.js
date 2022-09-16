
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./Validation";


const SignUp =()=>{
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  


  useEffect(() => {
      if (isCPasswordDirty) {
          if (password === cPassword) {
              setShowErrorMessage(false);
              setCPasswordClass('form-control is-valid')
          } else {
              setShowErrorMessage(true)
              setCPasswordClass('form-control is-invalid')
          }
      }
  }, [cPassword])

  const handleCPassword = (e) => {
      setCPassword(e.target.value);
      setIsCPasswordDirty(true);
  }

  const navigate =useNavigate();
  const[values,setValues]= useState({
    fname:"",
    lname:"",
    email:"",
    password:""

  });
  const [errors,setErrors]=useState({});

  

  const handleSubmit = () => {
    //event.preventDefault();
    setErrors(validation(values));

      
    //  redirect to 
    navigate('/PaymentsOpt');
  }


 


  
  const handleChange=(event)=>{
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    })
  }
  const handlFormSubmit=(event) =>{
    event.preventDefault();
  //  setErrors(validation(values));
    navigate('/PaymentsOpt');
  };


    return (
      <form onSubmit={handlFormSubmit} >
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label >First name</label>
          <input
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            
            className="form-control"
            placeholder="First name"
            required
          />
          {errors.fname && <p className="error">{errors.fname}</p>  }
          
        </div>
        <div className="mb-3">
          <label >Last name</label>
          <input type="text"  className="form-control" placeholder="Last name" name="lname" value={values.lname} 
          onChange={handleChange}
           required
          />
          {errors.lname && <p className="error">{errors.lname}</p>  }
        </div>
        

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id='email'
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>  }
          
        </div>
        
        <div className="mb-3">
          <label >Password</label>
          <input
            className="form-control"

            type="password"
            name="password"
            id="password"
            value={password}
            //onChange={handleChange}
            onChange={(e) => { setPassword(e.target.value) }}
           placeholder="Enter password"
           required
          />
          <div className="mb-3">
                    <label htmlFor="confirmPassword" 
                    className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} 
                    id="confirmPassword" value={cPassword}
                   onChange={handleCPassword} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}


          
          
        </div>
        
  
          
                
         <div className="d-grid">
          <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      <p className="forgot-password text-right">
         Already registered <a href="/SignIn">sign in?</a>
      </p>
      </form>
    )
  }

export default SignUp;