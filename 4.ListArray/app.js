
import React from "react";
import ReactDOM from "react-dom";
import {Array} from "./src/Array";

let modalsNew = (
    <div>
        <Array title = "Array Demo"/>
</div>
);

class App extends React.Component{
    render(){
        return modalsNew;
    };
}

ReactDOM.render(<App/>,document.getElementById("app"));