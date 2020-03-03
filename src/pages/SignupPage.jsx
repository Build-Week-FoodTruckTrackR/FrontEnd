import React from 'react';

import './signup-page.scss';
import CustomButton from '../custom-button/CustomButton';

const SignupPage = () => {
    return (
   
            <div className="sign-up">
                <h2>Create an account</h2>
                <div className="buttons signup-buttons">
                    <CustomButton type="submit">SIGN UP AS A DINER</CustomButton>
                    <CustomButton type="submit">SIGN UP AS AN OPERATOR</CustomButton>
                </div>    
            </div>

    );
}

export default SignupPage;