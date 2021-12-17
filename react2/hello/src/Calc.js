import React, { useState } from "react";

function Calc() {

    const [input, setInput] = useState({});
    const [targetNumber, setTargetNumber] = useState();
    const [modNumber, setModNumber] = useState();
    const [resultNumber, setResultNumber] = useState("Calc result");

    const [inputText, setInputText] = useState({});
    const [resultTextAdd, setResultTextAdd] = useState("Text add Resut");


    const add = event => {
        setResultNumber(parseInt(targetNumber) + parseInt(modNumber));
    }

    const sub = event => {
        setResultNumber(parseInt(targetNumber) - parseInt(modNumber));
    }

    const multi = event => {
        setResultNumber(parseInt(targetNumber) * parseInt(modNumber));
    }

    const division = event => {
        setResultNumber(parseInt(targetNumber) / parseInt(modNumber));
    }

    const addString = event => {
        setResultTextAdd(targetNumber + modNumber);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{resultNumber}</h1>
                <label> Enter Calc Number :
                    <input type="number"
                        name="targetNumber"
                        value={input.targetNumber}
                        onChange={(e) => setTargetNumber(e.target.value)} />
                </label>
                <label>
                    <input type="number"
                        name="modNumber"
                        value={input.modNumber}
                        onChange={(e) => setModNumber(e.target.value)} />
                </label>
                <button type="submit" id="add" onClick={add}>add</button>
                <button type="submit" id="sub" onClick={sub}>sub</button>
                <button type="submit" id="multi" onClick={multi}>multi</button>
                <button type="submit" id="division" onClick={division}>division</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h1>{resultTextAdd}</h1>
                <label>Enter your string :
                    <input type="text"
                        name="targetNumber"
                        value={inputText.targetNumber}
                        onChange={(e) => setTargetNumber(e.target.value)} />

                    <input type="text"
                        name="modNumber"
                        value={inputText.modNumber}
                        onChange={(e) => setModNumber(e.target.value)} />
                </label>
                <button type="submit" id="add" onClick={addString}>addString</button>
            </form>
        </>
    )
}


export default Calc;