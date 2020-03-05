import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../form-input/FormInput';
import CustomButton from '../../custom-button/CustomButton';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import OperatorDashboard from '../operator/OperatorDashboard';

const OperatorLoginForm = (props) => {

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = event => {
        event.preventDefault();
        console.log('what is login', login);
        axiosWithAuth()
        .post('operators/login', login)
        .then(response => {
            localStorage.setItem("token", response);
            props.history.push("/login");
            console.log("response from login post", response)
        })
        .catch(error => {
            // alert((error.message = "Invalid Username or Password"));
            console.log('login error', error);
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
        <h2>Sign in as an Operator..</h2>
        {/* <span>Sign in with your email and password.</span> */}

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
            <CustomButton type="submit">
            <Link to={OperatorDashboard}>
            </Link>SIGN IN</CustomButton>
            </div>    
        </form>
        </div>
    );
}

export default OperatorLoginForm;