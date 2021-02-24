import React from 'react'
import ReactDom from 'react-dom'
import "./index.css";
import App_2 from './App_2';

ReactDom.render(
    <>
    <App_2/>

    </>
    ,document.getElementById('root')
)



// Apps part 
// import React, { useState } from 'react';



// const App_2 = () => {
//     const state = useState();
//     // console.log(state);


//     // let count = 1;
// const [count,setcount]=useState(0);
      
//     const IncNum = () => {
//         setcount(count+1);
//         // console.log("clicked" + count++);
//     }

//     return (
//         <>
//             <div className='click'>

//                 <h1> {count} </h1>
//                 <button onClick={IncNum} > Click Me </button>

//             </div>

//         </>
//     );
// };
// export default App_2