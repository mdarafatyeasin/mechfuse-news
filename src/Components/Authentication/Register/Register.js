import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [ createUserWithEmailAndPassword, user, loading ] = useCreateUserWithEmailAndPassword(auth);

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
        if(password !== confirmPassword){
            setError('Your two password did not match');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <h1>this is Register page</h1>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <div className="email">
                        <input onBlur={handleEmail} type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="password">
                        <input onBlur={handlePassword} type="password" placeholder='Enter Your Password' />
                    </div>
                    <div className="password">
                        <input onBlur={handleConfirmPassword} type="password" placeholder='Enter Your confirm Password' />
                    </div>
                </div>
                <p>{error}</p>
                <input type="submit" value="Log In" />
            </form>
            <p>Already have an account? <Link to="/login">Login Now</Link></p>
        </div>
    );
};

export default Register;