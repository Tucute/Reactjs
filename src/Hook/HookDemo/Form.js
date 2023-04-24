import React, { Component, useState } from 'react';

function FavoriteColor() {  
    const [image, setImage]  = useState('')
        return (
            <div>
                <h1>Hình ảnh của giáo viên </h1>
                <button type='button' onClick = { () => setImage('https://znews-photo.zingcdn.me/w660/Uploaded/lce_jwqqc/2023_02_12/158194743_1117191178730437_6450453191540128657_n_1.jpg')}>Teacher 1</button>
                <button type='button' onClick = { () => setImage('https://img.lovepik.com/photo/50112/2990.jpg_wh860.jpg')}>Teacher 2</button>
                <button type='button' onClick = { () => setImage('https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/4/1144355/Jung-Kyung-Ho.jpg')}>Teacher 2</button>
                <br></br>
                <img src= {image} />
            </div>
        );
    }   


const Loginform = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {handleSubmit} = this.props ;
    return (  
        <div className='App'>
            <header className='App-header'>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
            </header>
        </div>
    )
}

function Car() {
    const[car, setCar] = useState({
        brand: 'Ford',
        color: 'red',
        year: '1994'
    }) 
    const UpdateColor = () => {
        setCar(car => ({
           ...car,color: 'blue'
        })
        );
    }
    return (
        <div>
            <h1>My car</h1>
            <p>
                It is a {car.color} from {car.year}
            </p>    
            <button onClick={UpdateColor()}>click</button>
        </div>
    )
}
export default Car;