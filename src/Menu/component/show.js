import React, { Component } from 'react';

class Show extends Component {
    render() {
        return (
            <tr> 
                <td className='style'> {this.props.name}</td>
                <td className='dot'> ............................................</td>
                <td className='style'> {this.props.price} đ</td>
            </tr>
        );
    }
}

export default Show;