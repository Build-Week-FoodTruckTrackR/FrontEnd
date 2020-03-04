import React from 'react';

import DinerLoginForm from '../forms/DinerLoginForm';
import OperatorLoginForm from '../forms/OperatorLoginForm';


const LoginPage = () => {
    return (
    
        <div>
             <h2>Already have an account?</h2>
            <span>Sign in with your email and password.</span>
      
            <div className="login-page">
                <DinerLoginForm />
                <OperatorLoginForm />
            </div>
        </div>
    );
}

export default LoginPage;