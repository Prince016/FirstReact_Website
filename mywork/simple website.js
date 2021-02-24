
import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";

let curDate=new Date(2021,1,1,4);
curDate=curDate.getHours();
let greeting='';

const cssStyle={
    color: 'blue',
    justifyContent:'center',
    alignItems:'center'
};


if(curDate>=1 && curDate<12){
greeting='Good Morning';
cssStyle.color='green';
}
else if(curDate>=12 && curDate<18){
    greeting='Good Afternoon';
cssStyle.color='yellow';

}
else{
    greeting='Good Night';
cssStyle.color='darkblue';

}

ReactDOM.render(
    <>
    <div>  
   <h1> Hello Sir, <span style={cssStyle}> {greeting}  </span>  </h1>
   </div>
    </>
    , document.getElementById("root")
);











