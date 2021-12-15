import React, { useEffect, useState } from "react";

const Containerfunction = (props) => {
    const [state, setState] = useState(true);
    const delHandler = () => setState(false); 
    console.log(state);
    
    let myHeader; 
        if(state) {
            myHeader = <Child />;
        }
        return (
            <div>
                {myHeader}
                <button type="button" onClick={delHandler()}>delete hander</button>
            </div>
        );
    }

    const Child = () => {
       useEffect(()=>{
        alert("the component named Header is about to be unmounted.")
      
     
       return (<h1>Hello World! ! ! ! !</h1>);  
    };
    
export default Containerfunction;
