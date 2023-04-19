import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: "1964"
        };
    }
    changeColor = () => {
        this.setState({color:"orange"})
    }
    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>{this.state.model}</p>
                <p>{this.state.color}</p>
                <p>{this.state.year}</p>
                <div style={{background: this.state.color, width: '20px'}}>ccc</div>
                <br></br>
                <button className='btn btn-warning' type='button' onclick={this.changeColor()}>Change</button>
            </div>
        );
    }
}

export default Demo;