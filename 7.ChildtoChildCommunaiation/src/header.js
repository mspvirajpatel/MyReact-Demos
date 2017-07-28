import React from "react"

export class Header extends React.Component{

    render() {
        console.log('header.js render');

        return  <div>
            <h3>Name -> {this.props.nameShow}</h3>
            <input type='button' value='Change Parent Funcation to call and Chnage State Value' onClick={this.chnageName} />
            <br/>
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

}