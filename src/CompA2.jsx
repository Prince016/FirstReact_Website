
import React, { useEffect, useState } from 'react';
import axios from "axios";

const CompA2 = () => {

    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmove] = useState();


    useEffect(()=>{
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
       setname(res.data.name);
       setmove(res.data.moves.length);
        }

        getData();
    })

    return (
        <>
            <h1>You choose <span style={{color:"red"}}>{num} value </span>  </h1>
            <h1>my name is <span style={{color:"red"}}>{name}</span>   </h1>
            <h1> I have  <span style={{color:"red"}}>  {moves} moves </span> </h1>

            <select value={num} onChange={(event) => {
                setnum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default CompA2;
