
import React from "react";
import ReactDOM from "react-dom";
import {NewLifeCycle} from "./src/LifeCycle";


let modalsNew = (
    <div>
        <NewLifeCycle title = "Life Cycle Demo" step = {2} />
</div>
);

class App extends React.Component{
    render(){
        return modalsNew;
    };
}

ReactDOM.render(<App/>,document.getElementById("app"));