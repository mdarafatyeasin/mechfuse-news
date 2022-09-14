import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Icon } from '@iconify/react';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home');
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
                <h1>Create a new Account</h1>
                <p className='description'>Hey, Enter your details to get a new account.</p>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <div className="email">
                            <input className='input' onBlur={handleEmail} type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="password">
                            <input className='input' onBlur={handlePassword} type="password" placeholder='Enter Your Password' />
                        </div>
                        <div className="password">
                            <input className='input' onBlur={handleConfirmPassword} type="password" placeholder='Enter Your confirm Password' />
                        </div>
                    </div>
                    <p>{error}</p>
                    <p>Having trouble in Log in?</p>
                    <div className="button">
                        <input type="submit" className='input-button' value="Log In" />
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
                        <p className='toggle'>Already have an account? Please <Link to="/login">Log in</Link> now.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;