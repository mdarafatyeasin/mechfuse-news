import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <h1>this is log in page</h1>
            <form onSubmit={handleUserLogIn}>
                <div className="input-group">
                    <div className="email">
                        <input onBlur={handleEmail} type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="password">
                        <input onBlur={handlePassword} type="password" placeholder='Enter Your Password' />
                    </div>
                </div>
                <p>{error?.message}</p>
                {
                    loading && <p>Loading</p>
                }
                <input type="submit" value="Log In" />
            </form>
            <p>New to mechfuse-news? <Link to="/register">Register Now</Link></p>
        </div>
    );
};

export default LogIn;