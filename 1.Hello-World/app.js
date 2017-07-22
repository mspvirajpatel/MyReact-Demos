
import React from "react";
import ReactDOM from "react-dom";
import {NewPage,Demo} from "./src/demo";
//import Demo from "./src/demo"; Demo Class Use karvu hoy to Defualt Key Add karvi padi in Demo.js ma extends Defults

let modals = (
    <div>
        <NewPage />
        <Demo />
    </div>
);

class App extends React.Component{
    render(){
        return modals;
    };
}

//(template)
//ReactDOM.render(React.createElement(Demo), document.getElementById('app'));
ReactDOM.render(<App/>,document.getElementById("app"));