import React from 'react';

import DinerLoginForm from '../forms/DinerLoginForm';
import OperatorLoginForm from '../forms/OperatorLoginForm';


const LoginPage = () => {
    return (
            <div className="login-page">
                <DinerLoginForm />
                <OperatorLoginForm />
            </div>
       
    );
}

export default LoginPage;