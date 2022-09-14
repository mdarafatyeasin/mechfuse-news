import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './NavBar.css'
const NavBar = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <nav className='navbar'>
                <Link to="/home">Home</Link>
                {
                    user ? "" : <Link to="/register">Register</Link>
                }
                {
                    user ? <button onClick={handleLogOut}>Log Out</button>: <Link to="/login">Log In</Link>
                }
            </nav>
        </div>
    );
};

export default NavBar;