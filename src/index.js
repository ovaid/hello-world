import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


let styleNew = {backgroundColor:"tomato" , color:"blue" , textAlign:"center"};
let styles = {backgroundColor:"yellow", color:"red", textAlign:"center" };
function Hello(){
    let rameez = "Hello , My Name is Rameez";
    
    return (
        <div className = "circle">
            <h1 style={styles}>Hello Rameez</h1>
            <p style={styles}>This is React and is easy to learn</p>
            <h2 style={styles}>my name is Asif</h2>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById("root"));




// let sty = {backgroundColor:"#FFFF" , color:"blue" , textAlign:"right"};
function ReactFirst(){
    let a = 18;
    return (
        <div style={styleNew} className="visible">
            <p style={styleNew}>hello Wolrd this is my first React app creation on 8th of july 2023 {a*2 + 12}</p>
            <span style={styles}>My Name is Rameez Raja and i am a software developer at iQuasar srinagaer IT- solutions</span>
            <div> <h2><b style={styleNew}>Ovaid Mushtaq,Mushtaq Ahmad Najar Dilshada Akhter</b></h2></div>
           <div><h1><b style={styles}> Abdul Rehman Najar,Zain Adil , Mehak Muishtaq, Adil Hameed</b></h1></div> 
           <h1>My name is AASIFA</h1>
           <div className="image">
              <img src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" height="300px" width="400px" style={{borderRadius:"40px"}}></img>
              <img src="https://th.bing.com/th/id/OIP.d89LyDvQ6CNdAObfE_lzlwHaGL?w=190&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="300px" width="400px" style={{borderRadius:"40px"}}></img>
              <img src="https://th.bing.com/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"  height="300px" width="400px" style={{borderRadius:"40px"}}></img>
           </div>
        </div>
    )
}

ReactDOM.render(<ReactFirst/> , document.getElementById("firstroot"));



























// import React, { useState } from 'react';
// import './YourComponent.css'; // Import your CSS file


