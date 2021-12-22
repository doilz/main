import React, { useState } from "react";

function Functionmaster () {
    const [result, setResult] = useState(true);
    const [resultText, setResultText] = useState("This is Result A");

    const resultTextA = () => {
        setResultText("This is Result A")
    }
    
    const resultTextB = () => {
        setResultText("This is Result B")
    }

    const resultA = () => {
        setResult(false);
        resultTextA()        
    }

    const resultB = () => {
        setResult(true);
        resultTextB()
    }

    function PrintA(event) {
        return (
                <div>
                    {resultText}    
                    <button type="button" onClick={resultA}>Result A</button> 
                </div>
               )
    }

    function PrintB(event) {
        return (
            <div>
                {resultText}
                <button type="button" onClick={resultB}>Result B</button>
            </div>
        )
        
    }


 

    return (
        <>
         {result ? <PrintA /> : <PrintB />}
        </>
    )

}

export default Functionmaster