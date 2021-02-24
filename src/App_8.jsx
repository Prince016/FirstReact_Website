import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App_8 = () => {

    const [addItem,setaddItem]=useState([]);

    const addNote=(note)=>{
        // alert("I am clicked ")
        setaddItem((prevdata)=>{
            return [...prevdata,note]
        })

    }

    const onDelete=(id)=>{
        setaddItem((olddata)=>{
            olddata.filter((currentdata,ind)=>{
          return ind!==id;
            })
        })
    }


    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {/* <Note /> */}

            {addItem.map((val,index)=>{
                return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            })}


            <Footer />
        </>
    )
}

export default App_8;