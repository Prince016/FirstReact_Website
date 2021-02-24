import React from "react"
import { useParams, useLocation, useHistory } from "react-router-dom";



// using the params 
// using the uselocaion 


const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <h1> User {fname} {lname} Page</h1>
            <br/>
            <p> My current location {location.pathname} </p>
            {location.pathname===`/user/prashant/sharma`?(
                <button onClick={()=> history.push("/")  }> Click me </button>
            ):null }
        </>
    );
}











export default User;