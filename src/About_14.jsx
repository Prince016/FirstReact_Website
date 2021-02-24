import React from 'react'
import web from "../src/images/delivery.png";
import { NavLink } from "react-router-dom"
import Common_14 from './Common_14';

const About_14 = () => {
    return (
        <>
            <Common_14 
            name="Welcome to About Page" 
            imgsrc={web} 
            visit="/contact" 
            btnname="Contact Now" />
        </>
    )
}

export default About_14

