
import React from "react"
import { useParams, useLocation } from "react-router-dom";

// const User=({match})=>{
//     return (
//         <>
//         <h1> User { match.params.fname} Page</h1>

//         </>
//     );
// }


// using the params 


const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    return (
        <>
            <h1> User {fname} {lname} Page</h1>
            <br/>
            <p> My current location {location.pathname} </p>
            {location.pathname===`/user/prashant/sharma`?(
                <button onClick={()=>{ alert(" you clicked ")}}> Click me </button>
            ):null }
        </>
    );
}


export default User;


// sames as tut -75 of index file 