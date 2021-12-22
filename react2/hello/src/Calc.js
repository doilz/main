import React, { useState } from "react";

function Calc() {

    const [number, setNumber] = useState({
        targetNumber: '',
        modNumber: ''
    });
    const [inputText, setInputText] = useState({  
        firstText: "",
        secondText: ''
    });
   
    const onChange = (event) => {
        setNumber(values => ({...values, [event.target.name]: event.target.value}));
        setInputText(values => ({...values, [event.target.name]: event.target.value}));
      }

    const [resultNumber, setResultNumber] = useState("Calc result");

    
    const [resultTextAdd, setResultTextAdd] = useState("Text add Resut");


    const add = event => {
        setResultNumber(parseInt(number.targetNumber) + parseInt(number.modNumber));
    }

    const sub = event => {
        setResultNumber(parseInt(number.targetNumber) - parseInt(number.modNumber));
    }

    const multi = event => {
        setResultNumber(parseInt(number.targetNumber) * parseInt(number.modNumber));
    }

    const division = event => {
        setResultNumber(parseInt(number.targetNumber) / parseInt(number.modNumber));
    }

    const addString = event => {
        setResultTextAdd(inputText.firstText + inputText.secondText);
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
                        value={number.targetNumber}
                        onChange={onChange} />
                </label>
                <label>
                    <input type="number"
                        name="modNumber"
                        value={number.modNumber}
                        onChange={onChange} />
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
                        name="firstText"
                        value={inputText.firstText}
                        onChange={onChange} />

                    <input type="text"
                        name="secondText"
                        value={inputText.secondText}
                        onChange={onChange} />
                </label>
                <button type="submit" id="add" onClick={addString}>addString</button>
            </form>
        </>
    )
}


export default Calc;