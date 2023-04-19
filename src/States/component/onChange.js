import React, { Component } from 'react';

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'your name'
        }
    }
    onchange(e)  {
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange.bind(this)}> </input>
                <Notification title="hello">{this.state.name}</Notification>
            </div>
        );
    }
}

export default Demo3;