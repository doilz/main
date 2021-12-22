import React, { useState, useRef } from "react";

export default function InputExam() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const nameInput = useRef();
    const { name, nickname } = inputs;    //비구조화 할당을 통해 값 추출

    const changeHandler = (event) => {
        const { value, name } = event.target;    //e.target 에서 name과 value를 추출

        setInputs({
            ...inputs,  // 기존의 input 객체를 복사 한 뒤
            [name]: value //name 키를 가진 값을 밸류로 설정
        });
    };

    const  resetHandler = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();  //초기화 해주고 포커싱
    }

    return (
        <div>
            <input 
                name="name"
                placeholder="input names"
                onChange={changeHandler}
                value={name} // 변수안에 밸류값을 넣겠다. 
                ref={nameInput} 
            />
            <input 
                name="nickname"
                placeholder="nickname"
                onChange={changeHandler}
                value={nickname}      
            />
            <button onClick={resetHandler}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
