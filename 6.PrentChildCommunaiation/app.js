
import React from "react";
import ReactDOM from "react-dom";
import {NewLifeCycle} from "./src/child";
import {Header} from "./src/header"

class App extends React.Component{

    alertOpen = () => {
        alert("Hello World");
    };

    render(){
        console.log('app.js render');
        return <div><NewLifeCycle title = "Child To Parent Funcation Call Hello World on Click" alertData = {this.alertOpen} ref="child"/>
            <Header title = "Child To Parent Funcation Call With State Value Chnage" nameShow = {this.state.name} changeData = {this.changeStateData}></Header>
        </div> ;
    };

    constructor(props) {
        //super consructor call
        console.log('constructor');
        super(props);

        this.state = {
            name : "Test"
        };
    }

    changeStateData = (value) => {
        this.setState({name : value })
    };

}

ReactDOM.render(<App/>,document.getElementById("app"));