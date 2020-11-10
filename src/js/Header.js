import React, {useState} from 'react';
import Form from "./Form";



const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="container_menu">
                    <div className="container_logo">
                        <h1 className="logo">Weeding<span>Planner</span></h1>
                        <h2 className="logo">Marlena Komońska</h2>
                    </div>
                    <ul className="menu">
                        <li className="menu-li"><a href="#" className="menu_inner">O mnie</a></li>
                        <li className="menu-li"><a href="#" className="menu_inner">Oferta</a></li>
                        <li className="menu-li"><a href="#" className="menu_inner">Zasady współpracy</a></li>
                        <li className="menu-li"><a href={<Form/>} className="menu_inner" >Kontakt</a></li>
                    </ul>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;