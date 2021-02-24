import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
 console.log(props);
    return (
        <>
            <div className='cards'>
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className="card-img" />
                    <div className="card-info">
                        <span className="card-category">{props.title}</span>
                        <h2 className="card-title" > {props.sname}</h2>
                        <a href={props.link} target="_blank">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

ReactDOM.render(
    <>
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
        title=" A Netflix Original Series "
        sname=" Dark " 
        link="https://wwww.netflix.com/in/title/80990668?source=35"
        />
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
        title=" A Netflix Original Series "
        sname=" Dark " 
        link="https://wwww.netflix.com/in/title/80990668?source=35"
        />
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
        title=" A Netflix Original Series "
        sname=" Dark " 
        link="https://wwww.netflix.com/in/title/80990668?source=35"
        />
        
    </>
    , document.getElementById("root")
);





