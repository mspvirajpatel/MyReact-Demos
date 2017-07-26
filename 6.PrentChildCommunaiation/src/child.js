import React from "react";

export class NewLifeCycle extends React.Component {

    render() {
        console.log('child.js render');

        return  <div>
                <h1>{this.props.title}</h1>
                <input type='button' value='Alert Show in Call Parent Funcation' onClick={this.props.alertData} />
                <hr></hr>
            </div>
    };

    //consructor
    constructor(props) {
        //super consructor call
        console.log('constructor');
        super(props);
        self.state = {
            name : "dfbg"
        }
    }


    componentWillMount = (e) => {
        console.log('componentWillMount');
    };

    componentDidMount = (e) => {
        console.log('componentDidMount');
    };

    componentWillUpdate = (e) => {
        console.log('componentWillUpdate');
    };

    componentDidUpdate = (e) => {
        console.log('componentDidUpdate');
    };

    componetWillUnmount= (e) => {
        console.log('componentDidUpdate');
        $(this._ref).__self('destroy');
    };

    // propTypes: {
    //     size: React.PropTypes.number,
    //     position: React.PropTypes.string.isRequired
    // }
    //
}
