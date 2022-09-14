import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './NavBar.css'
const NavBar = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div className="navbar-section">
            <div className='navbar'>
                <nav>
                    <Link to="/home"><h1>Logo</h1></Link>
                    <div className='menu-bar'>
                        <ul>
                            {
                                user ? "" : <li><Link to="/register">Register</Link></li>
                            }
                            <li>
                                {
                                    user ? <button className='logOut' onClick={handleLogOut}>Log Out</button> : <Link to="/login">Log In</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;