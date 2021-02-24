
import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';

const Todolist = () => {
const [num,setnum]=useState(0);

const incNum=()=>{
    setnum(num+1)
}
const decNum=()=>{
    if(num>0){
        setnum(num-1)
    }
    else{
        alert(" Sorry Can't be further deleted   ")
        setnum(0)
    }
}

    return (
        <>
            <div className='main-div'>
                <div className='center-div'> 
                <h1> {num } </h1>
                <div className='btn-div'>
                    <button onClick={incNum}> {AddIcon} </button>
                    <button onClick={decNum}>  {RemoveIcon} </button>
                </div>
                </div>
            </div>
        </>
    );
};

export default Todolist;

// for the icons go the link 
// https://material-ui.com/components/material-icons/#material-icons