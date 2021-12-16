import React from "react";

export class GoalclassCopy extends React.Component {
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
        const { goalstate } = this.state;

        if(this.state.isGoal === true) {
                return(
                <div>
                    <h1>Ronaldo Missed</h1>
                    <button type="button" onClick={this.MissGoal}>Next</button>
                </div>
                )
        }else {
            return (
                <div>
                    <h1>Sonaldo scored</h1>
                    <button type="button" onClick={this.MadeGoal}>Next</button>
                </div>
            )
        }    
         
    }
         
};


export default GoalclassCopy;