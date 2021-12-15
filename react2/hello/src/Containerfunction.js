import React, { useEffect, useState } from "react";

const Containerfunction = (props) => {
    const [show, setShow] = useState(true);
    const delHandler = () => setShow(false); 
    const componentUnmount = () => {
        useEffect(()=>{
           return() => alert("the component named Header is about to be unmounted.")
        });
    };
    
    console.log(state);
    
    let myHeader; 
        if(show) {
            myHeader = <Child />;
        }
        else {
            return(<div>
                {myHeader}
                <button type="button" onClick={delHandler()}>delete hander</button>
            </div>)
        };
    }
 
      

    const Child = () => {
       return (<h1>Hello World! ! ! ! !</h1>);  
    };
    
export default Containerfunction;
