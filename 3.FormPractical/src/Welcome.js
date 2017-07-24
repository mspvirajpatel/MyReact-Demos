
import React from "react";

export class Welcome extends React.Component
{
    render(){
        return <div><h1> {this.props.message} </h1> <h2>{this.state.name}</h2> <button onClick={this.onDefultClick}>Change name</button></div>;
    };

    //consructor
    constructor(props)
    {
        //super consructor call
        super(props);
        this.state = {
             name : ""
        };
        //this.onClick = this.onClick.bind(this)
    }

    //Arrow Funcation Without use Bind Funcation
    onDefultClick = () => {
        //alert("Button Clicked");
        this.setState({name:"Viraj"});
    }


    //use Bind Funcation
    onClick(event) {
        //alert("Button Clicked");
        this.setState({name:"Viraj"});
    }
}
