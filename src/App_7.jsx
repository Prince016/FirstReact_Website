import React, { useState } from 'react'
import Todolist from './Todolist';

const App_7 = () => {

    const [inputList, setinputList] = useState("");
    const [items, setitems] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value);
    };

    const listofItems = () => {
        setitems((olditems) => {
            return [...olditems, inputList];
        })
        setinputList("");
    };

    
    const deleteitem = (id) => {
        console.log("deleted ");
        setitems((olditems) => {
            return olditems.filter((arrElem,index)=>{
                return index !==id;
            })
        })

    }

    return (
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <br />
                    <h1> To Do List </h1>
                    <br />
                    <input type='text' placeholder=' Add a Items '
                        value={inputList} onChange={itemEvent} />
                    <button onClick={listofItems} > + </button>
                    <ol>

                        {items.map((itemvalue, index) => {
                            return <Todolist
                                key={index}
                                id={index}
                                text={itemvalue}
                                onSelct={deleteitem} />
                        })}

                    </ol>
                </div>

            </div>
        </>
    );

};

export default App_7;