import React, { useState, useEffect, useRef } from "react";

function Supercalc() {
    
    const [ inputNumber, setInputNumber ] = useState();
    const [ operators , setOperators ] = useState({});


    const [ targetNumber, setTargetNumber ] = useState();
    const [ resultNumber, setResultNumber ] = useState();
    

    const OnClickHandler = (event) => {
    //    setInputNumber(event.target.value);
       if(inputNumber) {
         setInputNumber(inputNumber + event.target.value);

       } else {
         setInputNumber(event.target.value)
       }
       
    }
    
    const onReset = () => {
        
    }

    const operator = (event) => {
        if(event.target.innerHTML == "*") {
           setTargetNumber(inputNumber + event.target.value)
            setInputNumber();
        }
    }

    



    return(
        <div className="calc">
            <h1>React calc</h1>
                <div className="calc-body">
                    {inputNumber}
                    <br></br>
                    {targetNumber}
                   
                    <div className="firstline">
                        <button className="number" name="9" value={9} onClick={(event) => OnClickHandler(event)}>9</button>
                        <button className="number" name="8" value={8} onClick={(event) => OnClickHandler(event)}>8</button>
                        <button className="number" name="7" value={7} onClick={(event) => OnClickHandler(event)}>7</button>
                        <button className="opertator" name="mult" onClick={operator} value={"*"}>*</button>
                    </div>
                   
                    <div className="secondline">
                        <button className="number">6</button>
                        <button className="number">5</button>
                        <button className="number">4</button>
                        <button className="opertator">+</button>
                    </div>
                   
                    
                    <div className="thirdline">
                        <button className="number">3</button>
                        <button className="number">2</button>
                        <button className="number">1</button>
                        <button className="opertator">-</button>
                    </div>
                

                    <div className="fourthline">
                        <button className="number">0</button>
                        <button className="opertator">.</button>
                        <button className="opertator">=</button>
                        <button className="opertator">/</button>
                    </div>
               

                    <div className="lastline">
                      <button className="reset">Clear</button>
                    </div>
                  
                </div>            
        </div>
    )

};

export default Supercalc;