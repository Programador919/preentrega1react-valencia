import React from 'react';



import carretaic from './carros.png';

export const CartWidget = () => {
    return (

        <div className='cartwidget'>
            <li >              <h4 className="numcarrit">0</h4> </li>
            <li >                <img src={carretaic} className="carros" ></img> </li>

        </div>)
}