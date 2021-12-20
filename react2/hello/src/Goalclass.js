import React from "react";

export class Goalclass extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                isGoal: true
            };
    }
   
    MadeGoal = () => {
       return this.setState({isGoal: true})
    }

    MissGoal = () => {
       return this.setState({isGoal: false})
              
    }

    render() {
      

    return (
        <>
            {this.state.isGoal ? <Child /> : <SecondChild />};
            {this.state.isGoal ? <button type="button" onClick={this.MissGoal}>Next</button> : <button type="button" onClick={this.MadeGoal}>Next</button>}
        </>
    )
         
    }
         
};

export class Child extends React.Component {
    render() {
        return(
            <div>
                <h1>Sonaldo Scored!!!!</h1>
            </div>
        )
    } 
}

export class SecondChild extends React.Component {
    render() {
        return(
            <div>
                <h1>Ronaldo Missed!!!!</h1>
            </div>
        )
    } 
}

export default Goalclass;