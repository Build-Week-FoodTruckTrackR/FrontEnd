import React from 'react';
import { Route } from "react-router-dom";

import './App.css';


import LoginPage from './pages/LoginPage';
import './pages/login-page.scss';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <LoginPage />
        <Route exact path="/login" component={LoginPage} />
        <SignupPage />
      </header>
    </div>
  );
}

export default App;
