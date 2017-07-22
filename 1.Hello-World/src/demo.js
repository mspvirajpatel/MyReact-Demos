
import React from "react";

export class Demo extends React.Component
{
    render(){
        return <div><h1> Hello World </h1> <div><h1> Hello World </h1></div></div> ;
    };
}

export class NewPage extends React.Component{
    render(){
        return <div className="not-found">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <p>
                Go back to the main page
            </p>
        </div>
    };
}

// export default class Demo extends React.Component
// {
//     render(){
//         return <div><h1> Hello World </h1> <div><h1> Hello World </h1></div></div> ;
//     };
// }
