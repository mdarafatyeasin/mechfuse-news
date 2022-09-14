import React from 'react';
import { Link } from 'react-router-dom';
import './LogInBox.css'

const LogInBox = () => {
    return (
        <div className='boxSection'>
            <div className="loginBox">
                <h2>Welcome to out news feed.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aperiam, quas maiores et, facere natus quibusdam laudantium sed iusto ratione id expedita nihil autem quod earum. Molestias, dicta pariatur! Voluptatibus sint excepturi inventore quos, quas aliquam itaque. Magni recusandae sed atque aliquam, possimus, est illo nobis ipsum, laborum iure placeat?</p>
                <button>
                    <Link to="/login"><strong>Click here to get news!!</strong></Link>
                </button>

            </div>
        </div>
    );
};

export default LogInBox;