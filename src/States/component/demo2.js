import React, { Component } from 'react';
import { getData } from './data';

class Product extends Component {
    constructor(props) {
        var arr = getData("featuresItem");
        super(props);
        this.state = {arr};
    }
    render() {
        return (
            this.state.arr.map(key =>
                <div className='col-md-3 pt-5'>
                    <div classname="card" style={{width: '18rem'}}>
                        <img src={key.image} className="card-img-top" alt="..." />
                        <div classname="card-body">
                            <h5 classname="card-title">{key.name}</h5>
                            <p classname="card-text">{key.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>      
                </div>           
            )
        );
    }
}

export default Product;