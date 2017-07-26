
import React from "react";
import ReactDOM from "react-dom";
import {NewLifeCycle} from "./src/child";
import {Header} from "./src/header"

class App extends React.Component{

    alertOpen = () => {
        alert("Hello World");
    };

    onClick = () => {
        console.log('clicked');

        this.refs.child.changeStateData();

        this.changeStateData(this.refs.child.state.names)

    };

    render(){
        console.log('app.js render');
        return <div><NewLifeCycle title = "Child To Child Funcation Call With State Value Change" alertData = {this.alertOpen} ref="child"/>
            <Header title = "" nameShow = {this.state.name} changeData = {this.onClick}></Header>
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