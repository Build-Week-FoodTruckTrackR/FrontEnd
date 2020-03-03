import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('login', login)
        .then(response => {
            console.log("response", response)
        })
        .catch(error => {
            console.log(`login error: ${error}`);
        });
    };

    const handleChange = event => {
        setLogin({
          ...login,
          [event.target.name]: event.target.value
        });
      };

    
    return (
        <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={handleSubmit}>
            <FormInput 
                type="text" 
                name="username" 
                value={login.username}
                label="username"
                handleChange={handleChange} 
                required />

            <FormInput 
                type="password" 
                name="password" 
                value={login.password}
                label="password"
                handleChange={handleChange} 
                required />

            <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            </div>    
        </form>
        </div>
    );
}

export default LoginForm;