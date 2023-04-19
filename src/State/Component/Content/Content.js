import React, { Component } from 'react';
import { getData } from './data';
import Showcard from './Showcard';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state= {
            home: <div>Trang chủ</div>
        };
    }

    home = () => {
        // let data = getData();
        // console.log(data);
        // data = data.map(key =>
        //         <Showcard 
        //             image = {key.image}
        //             name = {key.name}
        //             price = {key.price}
        //             type = {key.type}
        //         />
        //     )
        // this.setState({home: data});
        this.setState({home: <div>Trang chủ</div>});
    }

    product1 = () => {
        let data = getData();
        data = data['product1'].map(key =>
                <Showcard 
                    image = {key.image}
                    name = {key.name}
                    price = {key.price}
                    type = {key.type}
                />
            )
        this.setState({home: data});
    }

    product2 = () => {
        let data = getData();
        data = data['product2'].map(key =>
                <Showcard 
                    image = {key.image}
                    name = {key.name}
                    price = {key.price}
                    type = {key.type}
                />
            )
        this.setState({home: data});
    }

    product3 = () => {
        let data = getData();
        data = data['product3'].map(key =>
                <Showcard 
                    image = {key.image}
                    name = {key.name}
                    price = {key.price}
                    type = {key.type}
                />
            )
        this.setState({home: data});
    }

    render() {
        return (
            <div>
                <div className='button'>
                    <button onClick={this.home}>Home</button>
                    <button onClick={this.product1}>Product1</button>
                    <button onClick={this.product2}>Product2</button>
                    <button onClick={this.product3}>Product3</button>
                </div>
                <div className='show-product'>
                    <div className='row'>
                        {this.state.home}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;