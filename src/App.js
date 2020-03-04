import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

// import PrivateRoute from './utils/PrivateRoute';
import LoginPage from './pages/LoginPage';
import './pages/login-page.scss';
import SignupPage from './pages/SignupPage';
import DinerSignupForm from './forms/DinerSignupForm';
import OperatorSignupForm from './forms/OperatorSignupForm';



function App() {
  return (
    <div className="App">
       <Switch>
       
         <Route path="/signuppage" component={SignupPage} />
         <Route path="/signupdiner" component={DinerSignupForm} />
         <Route path="/signupoperator" component={OperatorSignupForm} />
          <Route path="/" component={LoginPage} />
        
       </Switch>
       {/* <SignupPage />
       <LoginPage /> */}
    
    </div>
  );
}

export default App;
