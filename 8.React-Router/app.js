
import React from "react";
import ReactDOM from "react-dom";
//import { render } from 'react-dom'
import Header from "./src/header"
import Main from './src/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component{

    render(){
        console.log('app.js render');
        return <div>
            <Header />
            <Main />
        </div> ;
    };

}

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>,document.getElementById("app"));


//
// const App = () => (
//     <div>
//         <Header />
//         <Main />
//     </div>
// );
//
// export default App
//
// render((
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// ), document.getElementById('app'));




