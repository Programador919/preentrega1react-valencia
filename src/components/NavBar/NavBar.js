import React from 'react';

import './NavBar.css';

import menuIc from './icons/menu.png'
import motocicletaIc from './icons/motocicleta.png';
import cascoic from './icons/casco.png';
import repuestosic from './icons/repuestos.png';
import chalecoIc from './icons/chaleco.png';
import guantesic from './icons/guantes.png';
import logomotoic from './icons/logomoto.png';
import impermeablesic from './icons/impermeables.png';

import { CartWidget } from './CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <nav className="navegador">
            
            <ul className="inicio">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={menuIc} alt="menu hamburguesa"></img>
                    </a>

                    <ul className='dropdown-menu'>
                        <li><a className="dropdown-item" href="#">MOTOS</a></li>
                        <hr className="dropdown-divider"></hr>

                        <li><a className="dropdown-item" href="#">AKT</a></li>
                        <li><a className="dropdown-item" href="#">HONDA</a></li>
                        <li><a className="dropdown-item" href="#">ZUZUKI</a></li>
                        <li><a className="dropdown-item" href="#">YAMAHA</a></li>
                        <hr className="dropdown-divider"></hr>

                        <li><a className="dropdown-item" href="#">CONTACTO</a></li>
                    </ul>


                </li>


                <li className="logo1"><a href="./index.html"><img src={logomotoic} ></img> </a></li>

                <li className="akt , entrada">       <img src={cascoic} ></img>  <a href="#"> </a></li>
                <li className="honda , entrada">     <img src={repuestosic} ></img>  <a href="#"> </a></li>
                <li className="zuzuki , entrada">       <img src={guantesic} ></img>  <a href="#"> </a></li>
                <li className="yamaha , entrada">    <img src={impermeablesic} ></img> <a href="#"> </a></li>
                <li className="contacto , entrada">  <img src={chalecoIc} ></img> <a href="#"> </a></li>

                <li className="drabar">                 <img src={motocicletaIc} ></img> </li>

                <CartWidget/>
            </ul>
        </nav>
    )
}