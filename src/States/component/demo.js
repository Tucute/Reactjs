import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bùi Văn Tiến",
            age: 26
        };
    };
    render() {
        var describe = "";
        if (this.state.age >= 50) {
            describe = "Bạn đã già";
        }
        else {
            describe = "Bạn còn trẻ";
        }
        return (
            <div className='row pt-5'>
                <h2>{this.state.name}</h2>
                <p>Tuổi: {this.state.age}</p>
                <p>Mô tả: {describe}</p>
            </div>
        );
    }
}

export default Member;