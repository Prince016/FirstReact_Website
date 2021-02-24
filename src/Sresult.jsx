import React from 'react'
import Search from './Search';

const Sresult=(props)=>{
const img =  `https://source.unsplash.com/400x400/?${props.name}`;

    return(
        <>
        <div>
<img src={img} alt=" img" />
        </div>

        </>
    );
};

export default Sresult;