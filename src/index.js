import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate = new Date(2024, 5, 5, 20);
currDate = currDate.getHours();
let greet = '';
const cStyle = {};

if(currDate >= 1 && currDate < 12){
  greet = 'Good Morning';
  cStyle.color  = 'green';
}
else if(currDate >= 12 && currDate < 19){
  greet = 'Good Afternoon';
  cStyle.color  = 'Orange';
}
else{
  greet = 'Good Night';
  cStyle.color  = 'black';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cStyle}> {greet} </span></h1>
    </div>
  </>
  ,document.getElementById('root')
);