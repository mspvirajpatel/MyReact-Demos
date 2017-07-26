
import React from "react";
import ReactDOM from "react-dom";
import {NewLifeCycle} from "./src/LifeCycle";


let modalsNew = (
    <div>
        <NewLifeCycle title = "Life Cycle Demo" step = {2} alertopenData = {this.alertOpen}/>
</div>
);

class App extends React.Component{
    render(){
        return modalsNew;
    };

    alertOpen = () => {
        console.log("Hello World");
        alert("Hello World");
    };
}

ReactDOM.render(<App/>,document.getElementById("app"));