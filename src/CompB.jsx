import React, { useContext } from "react";
import CompC from './CompC';
import { Firstname, Lastname } from './App_9';

const CompB=()=>{

    const fname=useContext(Firstname);
    const lname=useContext(Lastname);

return <h1> My name is {fname} {lname} </h1>
 

};

export default CompB;

