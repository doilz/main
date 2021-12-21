import React, { useState, useRef } from "react";

export default function InputExam() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const nameInput = useRef();
    const { name, nickname } = inputs;    //비구조화 할당을 통해 값 추출

    const onChange = (event) => {
        const { value, name } = event.target;    //e.target 에서 name과 value를 추출

        setInputs({
            ...inputs,  // 기존의 input 객체를 복사 한 뒤
            [name]: value //name 키를 가진 값을 밸류로 설정
        });
    };

    const  onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInputnput.current.forcus();  //초기화 해주고 포커싱
    }


}