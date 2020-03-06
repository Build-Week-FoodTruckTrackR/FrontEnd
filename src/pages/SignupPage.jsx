import React from 'react';
import {  Link } from 'react-router-dom';

import './signup-page.scss';
// import CustomButton from '../custom-button/CustomButton';

import DinerSignupForm from '../components/diner/DinerSignupForm';

const SignupPage = () => {
    // const history = useHistory();

    return (
   
            <div className="sign-up">
                <h2>Create an account</h2>
                <div className="buttons signup-buttons">

                <Link to={DinerSignupForm}>SIGN UP!!
                    </Link>

                    {/* <CustomButton type="submit" onClick={() => history.push('/signupdiner')}> SIGN UP AS A DINER</CustomButton> */}

                {/* <div className="buttons">
                    <CustomButton type="submit">
                    <Link to={DinerSignupForm}>
                    </Link>SIGN IN</CustomButton>
                </div>  */}

              
                    {/* <CustomButton type="submit" onClick={() => history.push('/signupoperator')}>SIGN UP AS AN OPERATOR</CustomButton> */}
                </div>    
            </div>

    );
}

export default SignupPage;