import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

// import PrivateRoute from './utils/PrivateRoute';
import Header from './components/navigation/Header';
import LoginPage from './pages/LoginPage';
import './pages/login-page.scss';
import OperatorDashboard from './components/operator/OperatorDashboard';
import SignupPage from './pages/SignupPage';
import DinerSignupForm from './components/diner/DinerSignupForm';
import OperatorSignupForm from './components/operator/OperatorSignupForm';
import Footer from './components/navigation/Footer';


function App() {
  return (
    <div className="App">
      <Header />
       <Switch>
        <Route path='/operatordashboard' component={OperatorDashboard} />
         <Route path="/signuppage" component={SignupPage} />
         <Route path="/signupdiner" component={DinerSignupForm} />
         <Route path="/signupoperator" component={OperatorSignupForm} />
          <Route path="/" component={LoginPage} />
        
       </Switch>
       {/* <SignupPage />
       <LoginPage /> */}
    <Footer />
    </div>
  );
}

export default App;
