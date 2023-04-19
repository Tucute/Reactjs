import React, { Component } from 'react';

class Showcard extends Component {
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.type}</h5>
                        <p className="card-text">{this.props.name}</p>
                        <p className="card-text">{this.props.price}</p>
                        <a href="#" className="btn btn-primary">Art to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcard;