import React from "react";

export class Array extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.state.temp} onChange={ this.onhandleChange } />
            <input type='button' onClick={this.add} value='Add'/>
            <input type='button' onClick={this.clear} value='Clear'/>
            <h2>
                {
                    this.state.nameArr.map((singleName, index) => {
                        return ( <div key={index}>
                                <dt>{singleName.name}</dt>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </h2>
        </div>;
    };

    //consructor
    constructor(props) {
        //super consructor call
        super(props);
        this.state = {
            nameArr: [
                {
                    name: 'Viraj',
                },
                {
                    name: 'Test',
                },
                {
                    name: 'Jaymin',
                }],
            temp : ""
        };
    }

    add = (e) => {
        let addName = {
            name: this.state.temp
        };

        this.state.nameArr.push(addName);

        this.setState({
            nameArr: this.state.nameArr
        });
    };

    clear = (e) => {

        this.setState({ temp: "" });
        this.setState({nameArr: []});
    };


    //on text Chnage Event
    onhandleChange = (e) => {

        // with State event
        this.setState({ temp: e.target.value });
    };
}
