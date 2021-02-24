import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div ClassName="navbarstyle">
                <h1>
                    <NavLink exact activeClassName="active_class" to="/" > About Us </NavLink>
                    <NavLink exact activeClassName="active_class" to="/contact1" > Contact Us </NavLink>
                    <NavLink exact activeClassName="active_class" to="/search" > Search </NavLink>
                    <NavLink exact activeClassName="active_class" to="/user/prashant/sharma" >  User </NavLink>
                    <br />
                    {/* <Link to="/" > About Us </Link>
                <Link to="/contact1" > Contact </Link>
                <br />
                <a href="/"> AboutUs</a>
                <a href="/contact1"> Contact</a> */}
                </h1>
            </div>

        </>
    )
}

export default Navbar;
