import React from 'react';

import DinerLoginForm from '../components/diner/DinerLoginForm';
import OperatorLoginForm from '../components/operator/OperatorLoginForm';
import SignupPage from './SignupPage';


const LoginPage = () => {
    return (
    
        <div>
            <div>
                <div className="signup">
                    <SignupPage />
                </div>
            </div>
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