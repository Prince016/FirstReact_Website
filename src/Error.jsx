
import React from 'react';
import { NavLink } from 'react-router-dom';

const Error=()=>{
    return( 
    <>
<h1> Opps ! page not Found </h1>
<NavLink to="/"  > Go back </NavLink>
    </>
    )
}

export default Error;
