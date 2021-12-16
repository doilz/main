import React from "react";

class Footballclass extends React.Component {
    constructor(props) {
        super(props);
    }
    
    Shoot = (a, e) => {
        alert(a, e.type);    
    };

    render() {
        return (
            <button type="button" onClick={(event)=> this.Shoot("The tremendes Goall from Son!!!", event)}>Take the shot!</button>
        );
    }
}

export default Footballclass;