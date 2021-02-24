import React, { useState } from 'react';

const App_3 = () => {
   
    const purple='#8e44ad';
    const [bg,setbg] = useState(purple);
    const [name,setname] = useState('Clicked me ');

    const BgChange = () => {
        // console.log("Clicked");
        let newbg='yellow';
        setbg(newbg);
        setname(" You clicked Me :😅 ");

    }
    const bgBack = () => {
        // console.log("Clicked");
        let newbg='blue';
        setbg(newbg);
        setname(" You Again clicked Me :🥴🤓😝 ");

    }

    return (
        <>
            <div style={{ backgroundColor: bg}}>
                <button onMouseEnter={BgChange} onMouseLeave={bgBack}>  {name} </button>
            </div>
        </>
    );
};

export default App_3;