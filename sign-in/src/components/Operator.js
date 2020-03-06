import React from 'react';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import TruckCard from './TruckCard';
import '../App.css';

export default function Operator(){
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
    <div className="operator-page">
    <div className="truckcard">
        <NavLink to='/'><span className="home">Home</span></NavLink>
        <TruckCard/>
    </div>
    <div className="operator-form">
        <div className='signin'>
            <h1 className="title">Operator</h1>
            <h2>Sign In</h2>
        <form className='signinform' onSubmit={handleSubmit(onSubmit)}>
            <p className="labels">Username</p>
            <input className="input" type='text' placeholder='Enter your username' name="username" ref={register}/>
            <p className="labels">Password</p>
            <input className="input" type='password' placeholder='Enter your password' name="password" ref={register}/>
            <input type='submit' value="Sign In" className="submit"/>
        </form>
        </div>
        <div className='signin'>
            <h2>Sign Up</h2>
        <form className="signinform" onSubmit={handleSubmit(onSubmit)}>
            <p className="labels">E-mail Address</p>
            <input className="input" type='text' placeholder='Enter your email' name="email" ref={register}/>
            <p className="labels">Username</p>
            <input className="input" type='text' placeholder='Enter your username' name="username" ref={register}/>
            <p className="labels">Password</p>
            <input className="input" type='password' placeholder='Enter your password' name="password" ref={register}/>
            <div>
            <input type="checkbox" name="hasAgreed"/> I agree all statements in terms of service
            </div>
            <input type='submit' value="Sign Up" className="submit"/>
        </form>
        </div>
        </div>
    </div>
    )
}