import React, {useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { useLocation, Switch } from 'react-router-dom'


const Header = () => {

    function HeaderView() {
        const location = useLocation();
        const style = {
            position: "absolute",
            background: "none",
            color: "width"
        }
        if (location === '/') {
            return <span className="container_menu"  style={style}></span>
        }
    }
    HeaderView();

    const activeStyle = {
        color: "#cb997e",
    }

    return (
        <header >
            <div className="container">
                <div className="container_menu" >
                    <div className="container_logo">
                        <h1 className="logo">
                            <NavLink to="/" activeClassName="logo-link">Wedding Planner</NavLink>
                        </h1>
                        <h2 className="logo">Marlena Komońska</h2>
                    </div>
                    <ul className="menu">
                        <li className="menu-li">
                            <NavLink to="/omnie" activeClassName="menu_inner main_said" activeStyle={activeStyle}>O mnie</NavLink>
                        </li>
                        <li className="menu-li">
                            <NavLink to="/oferta" activeClassName="menu_inner" activeStyle={activeStyle}>Oferta</NavLink>
                        </li>
                        <li className="menu-li">
                            <NavLink to="/zasadywspolpracy" activeClassName="menu_inner" activeStyle={activeStyle}>Zasady współpracy</NavLink>
                        </li>
                        <li className="menu-li">
                            <NavLink to="/kontakt" activeClassName="menu_inner" activeStyle={activeStyle}>Kontakt</NavLink>
                        </li>
                    </ul>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;