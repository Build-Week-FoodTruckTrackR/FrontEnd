import React, { useState } from 'react';
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import axios from 'axios';

const DinerSignupForm = (props) => {

    const [dinerSignup, setDinerSignup] = useState({
        username: '',
        password: '',
        favorite_trucks: [],
 
    });

    const handleChange = event => {
        setDinerSignup({
          ...dinerSignup,
          [event.target.name]: event.target.value
        });
        // console.log("diners", dinerSignup);
      };


    const handleSubmit = event => {
        event.preventDefault();
        console.log('what is registering', dinerSignup);
      axios
        .post('http://68.183.138.134/diners/register', dinerSignup)
        

        .then(response => {
          console.log("response", response);
  
          localStorage.setItem("token", response.data
          .token);
        //   props.history.push("dinerSignup");
        })
        .catch(error => {
            console.log(`signup error: ${error}`);
        });
    };
  
    return (
      <div className=''>
  
        <h3>SIGN UP</h3>

        <p>Enter a username and password to create your account. </p>
        <form onSubmit={handleSubmit}>    
        <FormInput 
            type="text" 
            name="username" 
            value={dinerSignup.username}
            label="username"
            handleChange={handleChange} 
            required
        />

        <FormInput 
            type="password" 
            name="password" 
            value={dinerSignup.password}
            label="password"
            handleChange={handleChange} 
            required
        />

        {/* <FormInput 
            type="integet" 
            name="favorite_trucks" 
            value={dinerSignup.favorite_trucks}
            label="favorite_trucks"
            handleChange={handleChange} 
            required
        /> */}
  
        <div className="buttons">
            <CustomButton type="submit">Create Account</CustomButton>
            
        </div> 

          </form>
  
      </div>
    );
  }

export default DinerSignupForm;  