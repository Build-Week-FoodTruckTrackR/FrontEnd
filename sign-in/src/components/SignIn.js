import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

export default function SignIn(){
    return(
        <div className="pg-contain">
        <div className="select-container">
            <div className="subtitle">
                <h4>Log In or Register</h4>
                <p>Are you a Diner or Operator?</p>
            </div>
            <div>
            <div className="pick">
                <div className="option">
                <NavLink to="/diner"><h3 className="marg">Diner</h3></NavLink>
                </div>
                <div className="option">
                <NavLink to="/operator"><h3>Operator</h3></NavLink>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}