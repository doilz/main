import React, { useEffect, useState } from "react";
import Headercomp from "./Headercomp";

function Headercomps() {
    const [headerTitle, setHeaderTitle] = useState("This is Header Title ! ! !");
    const changHeaderTitle = () => setHeaderTitle("Changed Header Title");
    const componentDidMount = () => {
        setTimeout(()=>{
            setHeaderTitle("setTimeOut Head Title ! ! !");
        }, 3000);
    };

    const componenetDidUpdate = () => {
        document.getElementById("div2").innerHTML =
        "The update title is " + headerTitle 
    };

    const getSnapshotBeforeUpdate = (prevProps) => {

    }

   useEffect(()=>{
    componentDidMount();
   });

   useEffect(()=>{
        componenetDidUpdate();
    });

    useEffect(()=>{

    });
           
    return (
        <div>
        <h1>{headerTitle}</h1>
        <button type="button" onClick={changHeaderTitle}>Change title</button>
        <div id="div1"></div>
        <div id="div2"></div>
    </div>);
};

export default Headercomps;