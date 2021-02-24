
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// use inline css as the object 
const heading ={
    // key:'value',
    color: 'red',
    textTransform:'capitalize',
    textAlign:'Center',
    fontSize:'43px' 
}

ReactDOM.render(
    <>
   {/* <h1 style= {heading}> Hello is the best rock </h1> */}
    {/*  ---------- OR ---------- */}
   <h1 style= {heading}> Hello is the best rock </h1>
  

   
    </>
    , document.getElementById("root")
);











