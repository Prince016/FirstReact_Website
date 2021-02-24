
import React from "react";
import ReactDOM from "react-dom";

const name=" Prashant "
const img1="https://picsum.photos/200/300"

ReactDOM.render(
    <>
   <h1 contentEditable="true"> Rockstar {name} </h1>
  

   <img src={img1}   alt=" Random images " /> 
    </>
    , document.getElementById("root")
);











