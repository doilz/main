import React, { useState } from "react";

function Gundamfunction() {
    const props = {  
        camp: "Earth",
        model: "X10A",
        engine: "Atomic",
        pilot: "Yamato"
    };
    
    const [model, setModel] = useState("X10A");
    const changeModel = () => setModel("X109 Justice");
    
    return (<div>
        <h1>{model}</h1>
        <h2>The Color is {props.color}</h2>
        <h2>The camp is {props.camp}</h2>
        <h2>The engine is {props.engine}</h2>
        <h2>The pilot name is {props.pilot}</h2> 
        <button type="button" onClick={changeModel}>Change Modle</button>
    </div>);
}



export default Gundamfunction;
