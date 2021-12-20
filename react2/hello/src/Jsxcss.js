import React from "react";
import Jsxtest from "./Jsxtest";
import Hello from "./Hello";
import './Jsxcss.css';

function Jsxcss() {
    let name = 'react';
    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 24, //default px
        padding: '1rem'
    }

    return (
        <>
            <Hello />
            <div style = {myStyle}>{name}</div>
            <h1 className="pink-box">Hello world ! ! !</h1>
        </>
    );
};

export default Jsxcss;
