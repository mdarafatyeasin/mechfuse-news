import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default NavBar;