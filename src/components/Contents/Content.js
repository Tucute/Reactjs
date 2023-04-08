import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
class Content extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <LeftContent /> 
                    <RightContent />
                </div>
            </div>
        );
    }
}

export default Content;