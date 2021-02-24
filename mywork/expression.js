// Expression jsx tutorial 
import React from "react";
import ReactDOM from "react-dom";

const flname=" Prashant Sharma ";

ReactDOM.render(
    <>
   {/*  <h1> My name is {flname} </h1> */ }

    {/* using the template literals in jsx  */}
    <h1>{` my name is ${flname}  ${lname}` }</h1>
    <p> my lycky number is the 16 menas i don't know the nmber so {3*5} </p>
    </>
    , document.getElementById("root")
);