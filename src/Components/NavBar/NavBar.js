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
        <div className='navbar'>
            <nav>
                <ul>
                        {
                            user ? "" :<li><Link to="/register">Register</Link></li> 
                        }
                    <li>
                        {
                            user ? <button onClick={handleLogOut}>Log Out</button> : <Link to="/login">Log In</Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;