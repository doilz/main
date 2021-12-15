import React from "react";


class Gundam extends React.Component {
    constructor(props) {
        const { color } = props;
        super(props);    //아규먼트

        this.state = {   //속성내장
            camp: "Earth",
            model: "X10A",
            engine: "Atomic",
            pilot: "Yamato"
        };
    } 

    changeModel = () => {
        this.setState({model: "X109 Justice"});
    }    

  
    render() {
        return (<div>
            <h1>{this.state.model}</h1>
            <h2>The Color is {this.props.color}</h2>
            <h2>The camp is {this.state.camp}!!!</h2>
            <h2>The engine is {this.state.engine}</h2>
            <h2>The pilot name is {this.state.pilot}</h2>
            <h2>The Cargo is {this.props.cargo}</h2>
            <button type="button" onClick={this.changeModel}>Change Modle</button>
        </div>);
    }

    // componentDidMount() {}
  }

export default Gundam;