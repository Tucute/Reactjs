import React, { Component, useState } from 'react';

function Order() {
    const [drinker, setDrinker] = useState({
        name: '',
        price: '',
        result: ''
    });
    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setDrinker({[name]: value});
    }
    
    return (
        <div>
            
        </div>
    );
}

export default form;