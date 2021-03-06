
import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
// import { Tooltip } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const Todolist = () => {
    const [num, setnum] = useState(0);

    const incNum = () => {
        setnum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setnum(num - 1)
        }
        else {
            alert(" Sorry Can't be further deleted   ")
            setnum(0)
        }
    }

    return (
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <h1> {num} </h1>
                    <div className='btn-div'>
                        <Tooltip title="Add">
                            <Button onClick={incNum} classname="btn_green" > <AddIcon /> </Button>
                        </Tooltip>

                        <button onClick={decNum} classname="btn_red" > <RemoveIcon /> </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todolist;
