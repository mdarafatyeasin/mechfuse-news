import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <h1>this is log in page</h1>
            <form>
                <div className="input-group">
                    <div className="email">
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="password">
                        <input type="password" placeholder='Enter Your Password' />
                    </div>
                </div>
                <input type="submit" value="Log In" />
            </form>
            <p>New to mechfuse-news? <Link to="/register">Register Now</Link></p>
        </div>
    );
};

export default LogIn;