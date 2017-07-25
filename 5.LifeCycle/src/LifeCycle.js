import React from "react";

//NewLifeCycle Component

export class NewLifeCycle extends React.Component {
    render() {
        console.log('render');
        var step =  this.props.step;
        console.log(step);

        return  <div>
                <h1>{this.props.title}</h1>
                <div>{this.state.count}</div>
                <input type='button' value='+' onClick={this.handleIncrement} />
                <input type='button' value='-' onClick={this.handleDecrement} />
            <input type='button' value='+2' onClick={this.updateCounter.bind(this, step)} />
            <input type='button' value='-2' onClick={this.updateCounter.bind(this, -step)} />
            </div>
    };

    //consructor
    constructor(props) {
        //super consructor call
        console.log('constructor');
        super(props);
        console.log(props);
        // this.props.title = "Counter";
        // this.props.step = 1;
        this.state = {
            count : 0
        };
    }

    updateCounter = (value) =>  {
        var newCount = this.state.count + value;
        this.setState({count: newCount});
    };

    handleIncrement = (e) => {
        var newCount = this.state.count + 1;
        this.setState({count: newCount});
    };

    handleDecrement = (e) => {
        var newCount = this.state.count - 1;
        this.setState({count: newCount});
    };

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

    // shouldComponentUpdate = (nextProps,nextState) =>
    // {
    //     console.log('componentWillUpdate', nextProps, nextState);
    //
    //     if (this.props.text === nextProps.text) return false;
    //     return true;
    // };
}
