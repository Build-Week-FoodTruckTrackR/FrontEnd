import React from 'react';
import { Switch } from "react-router-dom";

import './App.css';

// import PrivateRoute from './utils/PrivateRoute';
import LoginPage from './pages/LoginPage';
import './pages/login-page.scss';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <div className="App">
       <Switch>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <PrivateRoute exact path="/signuppage" component={SignupPage} />
          <Route exact path="/" component={LoginPage} /> */}
        
       </Switch>
       <SignupPage />
       <LoginPage />
    </div>
  );
}

export default App;
