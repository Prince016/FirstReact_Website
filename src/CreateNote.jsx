
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setexpand] = useState(true);

    const [note, setNote] = useState({
        title: " ",
        content: "",
    })


    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            }

        })
    }


    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: " ",
            content: "",
        })
    }


    const expandit = () => {
        setexpand(true);
    }

    const backNormal = () => {
        setexpand(false);
    }


    return (
        <>
            <div className="creator">
                <form>
                    {expand ?
                        <input type='text'
                            name="title"
                            value={note.title}
                            onChange={inputEvent}
                            placeholder='Write your title'
                            autoComplete='off'
                        /> : null}

                    <textarea
                        rows="5"
                        name='content'
                        value={note.content}
                        onChange={inputEvent}
                        placeholder=" Write a note.. "  >
                        onClick={expandit}
                        onDoubleClick={backNormal}
                    </textarea>

                    {
                        expand ?
                            <Button onClick={addEvent}>
                                <AddIcon classname='plus-sign' />
                            </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;