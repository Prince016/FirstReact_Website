import React from "react";
import ReactDOM from "react-dom";

const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();

ReactDOM.render(
    <>
   <h1> hello Time tutorial  </h1>
   <p> Curent date is  : {currdate} </p>
   <p> Curent time is  : {currtime} </p>
    </>
    , document.getElementById("root")
);