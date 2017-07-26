import React from "react"

export class Header extends React.Component{

    render() {
        console.log('header.js render');

        return  <div>
            <h1>{this.props.title}</h1>
            <h3>Name -> {this.props.nameShow}</h3>
            <input type="text" value={this.state.newName} onChange={ this.onhandleChange } />
            <br/><br/>
            <input type='button' value='Change Parent Funcation to call and Chnage State Value' onClick={this.chnageName} />
            <hr></hr>

        </div>
    };

    chnageName = (e) =>{

        this.props.changeData(this.state.newName);

        //this.setState({newName : this.props.changeData("testdfbgdf") });
    };

    //consructor
    constructor(props) {
        //super consructor call
        console.log('constructor');
        super(props);
        this.state = {
            newName : "NewName"
        }
    }

    //on text Chnage Event
    onhandleChange = (e) => {

        // with State event
        this.setState({ newName: e.target.value });
    };
}