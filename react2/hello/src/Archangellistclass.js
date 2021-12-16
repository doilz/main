import React from "react";

class Secondgundam extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return <li>This is {this.props.model}</li>
    };
}

class Archangellistclass extends React.Component {
   gundamlist = [   
            "ZMGF-X10A Freedom Gundam",
            "ZMGF-X109 Justice Gundam",
            "Strike Gundam" 
    ];
    
    render() {
        return (
            <>
                <h1>Which Gundam lives in Archangel?</h1>
                <ul>
                    {this.gundamlist.map((robot) => <Secondgundam model={robot} />)}
                </ul>
            </>     
        );
    }       
}

export default Archangellistclass;