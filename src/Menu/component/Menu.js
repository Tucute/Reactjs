import React, { Component, useState } from 'react';
import { getData } from './data';
import Show from './show';

function Content() {
        // console.log(getData)
        const datas = getData();

        const [drinker, setDrinker] = useState({
            name: '',
            price: 0,
            money: 0
        })
        function handleSubmit(event) {
            event.preventDefault();
            if (drinker.price == '') {
                alert('Vui lòng chọn đồ uống');
            }
            else {
                check(drinker.name);
                if (drinker.money == 0) {
                    alert('Vui lòng nhập số tiền');
                }
                else {
                    checkOrder(drinker.money);
                }
            }   
        }
        function checkOrder(money) {
            if (money < drinker.price) {
                alert('Về nhà lấy tiền gấp');
            }
            else {
                alert('Đồ uống của bạn là: ' + drinker.name + '\n Số tiền dư là: ' + money-(drinker.price) + 'đ');
            }
        }
        var handleInputChange = async(event) => {
            let key = event.target.name;
            let val = event.target.value;
            setDrinker({[key]: val});          
            check(val);
        }
        console.log(drinker);
        const check = (name) => {
            for (let i = 0; i < datas.length; i++) {
                if (datas[i].name == name) {
                    setDrinker(
                        (drinker) => ({
                            ...drinker, price: datas[i].price,
                        })
                    );
                }
            }
        }

        return (
            <div className='form'>
                <h1>Menu</h1>
                <div className='tbl'>
                    <table>
                    {
                        datas.map(data => 
                            <Show 
                                name={data.name}
                                price = {data.price}
                            />
                        )
                    }
                    </table>
                </div>
                <h3 className="text-center">KẾT QUẢ</h3>
                <form className='was-validated'>
                    <div className='from-group'>
                        <label>Chọn đồ uống</label>
                        <select 
                            name='name'
                            type='text'
                            onChange={handleInputChange}
                        >
                            <option value='Cà phê sữa'>Cà phê sữa</option>
                            <option value='Cà phê đá'>Cà phê đá</option>
                            <option value='Sting dâu'>Sting dâu</option>
                            <option value='Trà đá'>Trà đá</option>
                        </select>
                                                   
                    </div>
                    <div className='from-group'>
                        <label>Giá: </label>
                        <input 
                           type='number'
                           className='form-control'
                            name='price'
                            readOnly
                            value={drinker.price}
                           />
                           
                </div>
                <div className='from-group'>
                        <label>Nhập số tiền: </label>
                        <input 
                           type='number'
                           name='money'
                           className='form-control'
                           onChange={handleInputChange}
                           />                
                </div>
                <br></br>
                <button type="submit" onClick={handleSubmit} value="submit" className='btn btn-primary'>
                    XEM KẾT QUẢ
                </button>
                </form>
            </div>
               
        );
    }

export default Content;