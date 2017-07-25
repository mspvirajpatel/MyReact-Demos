import React from "react";

export class Welcome extends React.Component {
    render() {
        return <div>
            {/*with ref*/}
            {/*<input id="txtName" name="username" type="text" ref="txtName"/>*/}

            {/*on text Chnage Event */}
            {/*<input id="txtName" name="username" type="text" ref="txtName"  onChange={ this.onhandleChange }/>*/}


            {/*with State*/}
            {/*<input type="text" onChange={ this.onhandleChange }/>*/}

            {/*with State 2*/}
            <input type="text" onChange={ this.onhandleChange }/>

            <button onClick={this.onStateClick}>Submit</button>
            <h2>{this.state.name}</h2>
        </div>;
    };

    //consructor
    constructor(props) {
        //super consructor call
        super(props);
        this.state = {
            name: '',
            password: '',
        };
        //this.onClick = this.onClick.bind(this)
    }

    //Arrow Funcation Without use Bind Funcation
    onDefultClick = () => {

        // with refs key
        if (this.refs.txtName !== null) {
            this.setState({name: this.refs.txtName.value});

        }

        //with getElementById
        //this.setState({name: document.getElementById('txtName').value});
    };

    //with state event
    onStateClick = (e) => {

        // with State
        this.setState({ name: this.state.password });

    };

    //on text Chnage Event
    onhandleChange = (e) => {

        // with State event
        this.setState({ password: e.target.value });
        //this.setState({ name: this.state.password });
    };


    //use Bind Funcation
    onClick(event) {
        //alert("Button Clicked");
        this.setState({name: "Viraj"});
    }
}
