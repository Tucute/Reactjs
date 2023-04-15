import React, { Component } from 'react';
import RightContent from './rightContent';
import LeftContent from './leftContent';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <LeftContent/>
                    <RightContent/>
                </div>
            </div>
        );
    }
}

export default Content;