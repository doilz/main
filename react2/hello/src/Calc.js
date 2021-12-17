import React, { useState } from "react";

function Calc() {

    const [input, setInput] = useState({});
    const [targetNumber, setTargetNumber] = useState();
    const [modNumber, setModNumber] = useState();
    const [resultNumber, setResultNumber] = useState("Calc result");

    const [inputText, setInputText] = useState({});
    const [resultTextAdd, setResultTextAdd] = useState("Text add Resut");


    const add = event => {
        event.preventDefault();
        setResultNumber(parseInt(targetNumber) + parseInt(modNumber));
    }

    const sub = event => {
        event.preventDefault();
        setResultNumber(parseInt(targetNumber) - parseInt(modNumber));
    }

    const multi = event => {
        event.preventDefault();
        setResultNumber(parseInt(targetNumber) * parseInt(modNumber));
    }

    const division = event => {
        event.preventDefault();
        setResultNumber(parseInt(targetNumber) / parseInt(modNumber));
    }


    const addString = event => {
        event.preventDefault();
        setResultTextAdd(targetNumber + modNumber);
    }

    return (
        <>
            <form>
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
                <button type="submit" id="add" onClick={(event) => add(event)}>add</button>
                <button type="submit" id="sub" onClick={(event) => sub(event)}>sub</button>
                <button type="submit" id="multi" onClick={(event) => multi(event)}>multi</button>
                <button type="submit" id="division" onClick={(event) => division(event)}>division</button>
            </form>
            <form>
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
                <button type="submit" id="add" onClick={(event) => addString(event)}>addString</button>
            </form>
        </>
    )
}


export default Calc;