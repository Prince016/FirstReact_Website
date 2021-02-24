import React from 'react'
import web from "../src/images/d1.jpg";
import {NavLink} from "react-router-dom"
import Common_14 from './Common_14';

const Home_14 = () => {
    return (
        <>
            <Common_14 
            name="Grow your Bussiness with" 
            imgsrc={web} 
            visit="/services" 
            btnname="Get Started" />
        </>
    )
}

export default Home_14

