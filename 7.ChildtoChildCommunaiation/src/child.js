import React from "react";

export class NewLifeCycle extends React.Component {

    render() {
        console.log('child.js render');

        return  <div>
                <h1>{this.props.title}</h1>
                <input type="text" value={this.state.names} onChange={ this.onhandleChange } />
            </div>
    };

    //consructor
    constructor(props) {
        //super consructor call
        console.log('NewLifeCycle constructor');
        super(props);
        this.state = {
            names : "Test Child To Child"
        };
    }


    componentWillMount = (e) => {
       // console.log('componentWillMount');
    };

    componentDidMount = (e) => {
        //console.log('componentDidMount');
    };

    componentWillUpdate = (e) => {
        //console.log('componentWillUpdate');
    };

    componentDidUpdate = (e) => {
        //console.log('componentDidUpdate');
    };

    componetWillUnmount= (e) => {
        //console.log('componentDidUpdate');
        $(this._ref).__self('destroy');
    };

    changeStateData = (value) => {
        console.log('changeStateData Child.js');
        this.setState({name : "testghmghmhj" });

    };

    //on text Chnage Event
    onhandleChange = (e) => {
        // with State event
        this.setState({ names: e.target.value });
    };
    // propTypes: {
    //     size: React.PropTypes.number,
    //     position: React.PropTypes.string.isRequired
    // }
    //
}
