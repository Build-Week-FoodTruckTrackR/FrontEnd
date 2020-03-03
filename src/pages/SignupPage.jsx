import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import './signup-page.scss';
import CustomButton from '../custom-button/CustomButton';
import DinerSignupForm from '../forms/DinerSignupForm';

const SignupPage = () => {
    const history = useHistory();

    return (
   
            <div className="sign-up">
                <h2>Create an account</h2>
                <div className="buttons signup-buttons">
                    <CustomButton type="submit" onClick={() => history.push('/signupdiner')}> SIGN UP AS A DINER</CustomButton>

              
                    <CustomButton type="submit">SIGN UP AS AN OPERATOR</CustomButton>
                </div>    
            </div>

    );
}

export default SignupPage;