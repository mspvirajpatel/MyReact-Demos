
import React from "react";
import ReactDOM from "react-dom";
import {Welcome} from "./src/Welcome";

let modalsNew = (
    <Welcome message = "New Hello World"/>
);

class App extends React.Component{
    render(){
        return modalsNew;
    };
}

ReactDOM.render(<App/>,document.getElementById("app"));