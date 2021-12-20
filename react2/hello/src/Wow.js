// import react, {useState} from "react";

// function Wow() {
//     const [input, setInput] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.clans;
//         const value = event.target.value;
//         setInput(values => ({...values, [name]: value}));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(input)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name: 
//                 <input 
//                     type="text"
//                     name="username"
//                     value={input.username || ""}
//                     onChange={handleChange} 
//                 />
//             </label>
//             <label>
//                 Enter your age: 
//                 <input 
//                 type="number"
//                 name="age"
//                 value={input.age || ""}
//                 onChange={handleChange}
//                  />
//             </label>
//             <input type="submit" />
//         </form>
//     );
// }

// export default Wow;
import React, {useState} from "react";

function Wow () {
    const [input, setInput] = useState({}); // input을 object로 쓸거라 빈 객체를 넣어줌

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // input에 객체를 받음. 키값 - ...values, 밸류값 - [name]: value. 왜 name이 []에 들어가있는가
        setInput(values => ({...values, [name]: value})) //...멀티플밸류 [이름]: 밸류 = 여러밸류를 변수네임과 값으로 받겠다.
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name: 
                <input 
                    type="text"
                    name="username"
                    value={input.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input 
                    type="number"
                    name="age"
                    value={input.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    );
}


export default Wow;