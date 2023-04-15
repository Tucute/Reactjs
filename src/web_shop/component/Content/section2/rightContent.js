import React, { Component } from 'react';
import { getData } from './data';
import ShowCard from './ShowCard';


class RightContent extends Component {
    render() {
        console.log(getData);
        const futuresItem = getData("featuresItem");
        const tShirt = getData("t-shirt");
        const recommend = getData("recommendItem")
        return (
            <div className="col-sm-9 padding-right">
                <div className="features_items">
                    <h2 className="title text-center">Features Items</h2>
                    {
                        futuresItem.map(product =>
                            <ShowCard 
                                name={product.name}
                                image={product.image}
                                price={product.price}
                            />
                        )
                    }
                </div>
                <div className="category-tab">
                    <div className="col-sm-12">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                            <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                            <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                            <li><a href="#kids" data-toggle="tab">Kids</a></li>
                            <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active in" id="tshirt">
                        {
                            tShirt.map(product2 =>
                                <ShowCard 
                                    name={product2.name}
                                    image={product2.image}
                                    price={product2.price}
                                />
                            )
                        }
                        </div>
                    </div>
                </div>
                <div className="recommended_items">
                    <h2 className="title text-center">recommended items</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active">
                            {
                                recommend.map(product3 =>
                                    <ShowCard 
                                        name={product3.name}
                                        image={product3.image}
                                        price={product3.price}
                                    />
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default RightContent;