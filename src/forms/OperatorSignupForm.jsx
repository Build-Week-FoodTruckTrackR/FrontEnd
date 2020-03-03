import React, { useState } from "react";
// import { Link } from "react-router-dom";


import { axiosWithAuth } from "../util/axiosWithAuth";
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

const OperatorSignupForm = (props) => {
    const [signup, setSignup] = useState({
        username: '',
        password: '',
        trucks_owned: []
    });

    const handleChange = event => {
        setSignup({
          ...signup,
          [event.target.name]: event.target.value
        });
      };


    const handleSubmit = event => {
        event.preventDefault();
      axiosWithAuth()
        .post('register', signup)
  
        .then(response => {
          console.log("response", response);
  
          localStorage.setItem("token", response.data
          .payload);
        //   props.history.push("signup");
        })
        .catch(error => {
            console.log(`login error: ${error}`);
        });
    };
  
    return (
      <div className=''>
  
        <h3>SIGN UP</h3>

        <p>Enter a username and password to create your account. Your data is never sold or shared.</p>

        <form onSubmit={handleSubmit}>    
        <FormInput 
            type="text" 
            name="username" 
            value={signup.username}
            label="username"
            handleChange={handleChange} 
            required
        />

        <FormInput 
            type="password" 
            name="password" 
            value={signup.password}
            label="password"
            handleChange={handleChange} 
            required
        />

        <FormInput 
            type="integet" 
            name="trucks_owned" 
            value={signup.trucks_owned}
            label="trucks owned"
            handleChange={handleChange} 
            required
        />
  
        <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
        </div> 

          </form>
  
      </div>
    );
  }

export default OperatorSignupForm;  