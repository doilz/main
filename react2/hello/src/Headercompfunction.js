import React, { useEffect, useState, useRef } from "react";

export function usePrevTitle(state) {
     const ref = useRef(state); 
     useEffect(() => { 
         ref.current = state; 
        }, [state]); 
        return ref.current; 
    }

export const Headercomps = () => {
    const [headerTitle, setHeaderTitle] = useState("This is Header Title ! ! !");
    const prevTitle = usePrevTitle(headerTitle);
    console.log(prevTitle);
    const changHeaderTitle = () => setHeaderTitle("Changed Header Title");
    const componentDidMount = () => {
        setTimeout(()=>{
            setHeaderTitle("setTimeOut Head Title ! ! !");
        }, 3000);
    };

    const getSnapshotBeforeUpdate = () => {
        document.getElementById("div1").innerHTML = 
        "Before Update title is " + prevTitle;
    }
    
    const componenetDidUpdate = () => {
        document.getElementById("div2").innerHTML =
        "The update title is " + headerTitle 
    };


    useEffect(()=>{
        componentDidMount();
    });

    useEffect(()=>{
        
    });

    
    useEffect(()=>{
        getSnapshotBeforeUpdate();
    });

    useEffect(()=>{
        componenetDidUpdate();
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