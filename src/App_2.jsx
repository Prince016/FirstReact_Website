// import React, { useState } from 'react';



// const App_2 = () => {
// const [ctime,settime]=useState();

// const Updatetime=()=>{

// let newtime=new Date().toLocaleTimeString();
// settime(newtime);
// console.log("Time is updated ");
// }



//     return (
//         <>
//             <div className='click'>

//                 <h1> {ctime} </h1>
//                 <button onClick={Updatetime} > Get Time  </button>

//             </div>

//         </>
//     );
// };



// ------------------------------------------------------------
// Creating the Digital clock for
import React, { useState } from 'react';


const App_2 = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, settime] = useState(time);
    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        settime(time);

    }
    setInterval(UpdateTime,1000);

    return (

        <>
            <h1> {ctime} </h1>
            <button onClick={UpdateTime}> Get Time </button>
        </>
    );


}


export default App_2;










