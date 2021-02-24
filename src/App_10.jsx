
import React, { useEffect, useState } from 'react';

const App_10 = () => {

    const [num, setnum] = useState(0);

    const [nums, setnums] = useState(0);
    
    useEffect(()=>{
        // alert("Button clicked !!");
        document.title=`you clicked me ${num} times`;
    },[num]);

    return (
        <>
            <button onClick={() => { setnum(num + 1); }} >
                Click Me {num}
            </button>
           <br/>
            <button onClick={() => { setnums(nums + 1); }} >
                Click Me {nums}
            </button>
        </>
    )
}

export default App_10;
