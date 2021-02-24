import React, { useState } from 'react';

const App_4 = () => {

    const [name, setname] = useState();
    
    const [lastname, setlastname] = useState();

    const [fullname, setfullname] = useState();

    const [Lastname, setLastname] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setname(event.target.value)
    }
    
    const inputEvent2 = (event) => {
        setlastname(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setfullname(name);
        setLastname(lastname);
    };

    return (
        <>
            <div className="main-div"> 
                <form onSubmit={onSubmit}>
                    <div>
                        <h1> Hello {fullname} {lastname} </h1>
                        <input type="text"
                            placeholder='Enter Your Name'
                            onChange={inputEvent}
                            value={name} />
                        <input type="text"
                            placeholder='Enter Your  Last Name'
                            onChange={inputEvent2}
                            value={lastname} />
                        <button type="submit" > Clicked Me 👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App_4;
