import React from 'react';
import logo from './images/d1.jpg';

const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt='logo' />
                <h1> Rockers keep</h1>
            </div>

        </>
    );
};

export default Header;