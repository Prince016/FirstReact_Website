import React from 'react'

function add(a,b){
    let result =a+b;
    return result;
}
function sub(a,b){
    let result =a-b;
    return result;
}
function mult(a,b){
    let result =a*b;
    return result;
}
function div(a,b){
    let result =a/b;
    return result;
}

export {add,sub,mult,div};


import React from "react";
import ReactDOM from "react-dom";
import {add,sub,mult,div} from './Calculator';

ReactDOM.render(
    <>
    <ul>
        <li> Sum of two numbers is         {add(40,4)} </li>
        <li> Subtraction of two numbers is {sub(40,4)} </li>
        <li> Multiply of two numbers is    {mult(40,4)} </li>
        <li> Divide of two numbers is      {div(40,4)} </li>
    </ul>    
    </>
    , document.getElementById("root")
);