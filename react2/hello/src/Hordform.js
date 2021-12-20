import { useState } from "react";
//상태후킹

function Hordform() {
    const [clan, setClan] = useState("");  //initial empty
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The Clan name you entered was ${clan}`);
        console.log("e: " + event);
        console.log("e.target: " + event.target);
        console.log("e.target.value: " + event.target.value);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your Clans:
                <input 
                    type="text"
                    value={clan}
                    onChange={(e) => setClan(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
    
}



export default Hordform;
