import React from "react";

class Headercomp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headertitle: "This is My page of header"
        };
    }

    // static getDerivedStateFromProps(props, state) {  //메모리에 할당이 되버림. this 사용 불가
    //     return {headertitle: props.newTitle};        
    //     // 상속을 받어다가 다시 받은걸로 재정의 해주겠다. from index.js
    //     // state.headertitle = props.newTitle;
    //     // return (state.headertitle = props.newTitle);
    // }


    // shouldComponentUpdate() {
    //     return true;
    // }


    changeHeaderTitle = () => {
      return this.setState({headertitle: "changeHeaderTitle"})
    };


    componentDidMount() {
        setTimeout(()=>{
            this.setState({headertitle: "componentDidMount"});
        }, 2000);
    }  

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     document.getElementById("div1").innerHTML = 
    //     "Before Update title is " + prevState.headertitle + ", Before Update newtitle is " + prevProps.newTitle;
    // }
    
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The update title is " + this.state.headertitle;
    }
    
// 재정의
// 프로퍼티를 받아서 상속

    render() {
        // return (<h1>{this.state.headertitle}</h1>)
       return(
       <div>
            <h1>{this.state.headertitle}</h1>
            
            <button type="button" onClick={this.changeHeaderTitle}>Change title</button>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>)
    };
}

export default Headercomp;


// getDerivedStateFromProps, shouldComponentUpdate, render getSnapshopBeforeUpdate(), componentDidUpdate()