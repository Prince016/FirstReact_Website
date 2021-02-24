import React from 'react'
import ReactDom from 'react-dom'
import "./index.css";
import Todolist from './Todolist';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
    <>
    {/* <Todolist/> */}
    <h1> Welcome for learning the language</h1>
<button className="btn btn-danger"  > Rock </button>
    </>
    ,document.getElementById('root')
)



