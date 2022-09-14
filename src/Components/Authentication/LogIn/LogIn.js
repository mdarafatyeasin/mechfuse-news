import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
    // google ----------------------
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user || gUser) {
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
                <p>New to mechfuse-news? <Link to="/register">Register Now</Link></p>
                <input type="submit" value="Log In" />
                <div className="social">
                    <div className="divider">
                        <div></div>
                        <div></div>
                    </div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"> Continue with google</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;