import React, { createContext } from "react";
import CompA from "./CompA";


const Firstname = createContext();
const Lastname=createContext();

const App_9 = () => {

    return (
        <>
            <Firstname.Provider value={"Prashnat"}>
            <Lastname.Provider value={"Rock"}>
                <CompA />;
             </Lastname.Provider>
            </Firstname.Provider>
        </>
    );
};

export default App_9;
export {Firstname,Lastname};

