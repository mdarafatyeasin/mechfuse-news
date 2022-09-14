import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './LogIn.css'
import { Icon } from '@iconify/react';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleUserLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    // google ----------------------
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user || gUser) {
        navigate('/home');
    }


    return (
        <div className='authentication'>

            <div className="input-form">
                <h2>Please Login</h2>
                <p className='description'>Hey, Enter your details to get log in to your account.</p>
                <form onSubmit={handleUserLogIn}>
                    <div className="input-group">
                        <div className="email">
                            <input className='input' onBlur={handleEmail} type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="password">
                            <input className='input' onBlur={handlePassword} type="password" placeholder='Enter Your Password' />
                        </div>
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>Loading</p>
                    }
                    <p>Having trouble in Log in?</p>
                    <div className="button">
                        <input className='input-button' type="submit" value="Log In" />
                    </div>
                    <div className="social">
                        <div className="divider">
                            <div></div>
                            <p>Or Log in with</p>
                            <div></div>
                        </div>
                        <div className='social-buttons'>
                            <button className='social-button' onClick={() => signInWithGoogle()}>
                                <Icon icon="ant-design:google-outlined" />
                                <p>Google</p>
                            </button>
                        </div>
                        <p className='toggle'>New to mechfuse-news? <Link to="/register">Register Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;