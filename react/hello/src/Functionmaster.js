import { useState } from "react";

function Functionmaster (props) {
    const resultState = props.buttonState;

    function PrintA() {
        return <h1>This is PrintA result</h1>
    }

    function PrintB() {
        return <h1>This is PrintB result</h1>
    }

    function ButtonA() {
        return <input type="button" onClick={buttonState(false)}>ResultA</input>
    }

    function ButtonB() {
        return <input type="button" onClick={buttonState(true)}>ResultB</input>
    }

    return(
        <>
        {buttonState ? <PrintA /> : <PrintB />}
        {buttonState ? <ButtonA /> : <ButtonB />}
        </>
    )

}

export default Functionmaster