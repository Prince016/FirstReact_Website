import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <h1>
                <NavLink exact activeClassName="active_class" to="/" > About Us </NavLink>
                <NavLink exact activeClassName="active_class" to="/contact1" > Contact </NavLink>
                <br />
                <Link to="/" > About Us </Link>
                <Link to="/contact1" > Contact </Link>
                <br />
                <a href="/"> AboutUs</a>
                <a href="/contact1"> Contact</a>
            </h1>
        </>
    )
}

export default Navbar;
