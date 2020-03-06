import React from 'react';
import Diner from './components/Diner';
import Operator from './components/Operator';
import SignIn from './components/SignIn';
import {Route} from 'react-router-dom';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className='select-box'>
        <Route exact path='/' component={SignIn}/>
        <Route path='/diner' component={Diner}/>
        <Route path='/operator' component={Operator}/>
      </div>
    </div>
  );
}

