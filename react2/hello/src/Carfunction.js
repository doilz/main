import React, { useState } from "react";

function Carfunction(props) {
    const [ color ] = useState("red");

    return <h1>This is {props.color} car!!!</h1>;
}

export default Carfunction;