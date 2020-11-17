import React, {useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { useLocation, Switch } from 'react-router-dom'




const Header = () => {

    const [open, setOpen] = ("false");

    const activeStyle = {
        color: "#cb997e",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "10px 15px",
    }

    const [sidebar, setSidebar] = useState("false");
    const showSidebar =() => setSidebar(!sidebar);
//  <ul className="menu" {sidebar ? 'menu active' : 'menu'}>

    return (
        <header >
            <div className="container main_menu">
                <div className="container_menu" >
                    <div className="container_logo">
                        <h1 className="logo">
                            <NavLink to="/" activeClassName="logo-link"><i className="fab fa-aviato"></i></NavLink>
                        </h1>
                    </div>
                    <nav >
                        <ul className="menu" >
                            <li className="menu-li">
                                <NavLink to="/omnie" activeClassName="menu_inner main_said" activeStyle={activeStyle}>O
                                    mnie</NavLink>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/oferta" activeClassName="menu_inner"
                                         activeStyle={activeStyle}>Oferta</NavLink>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/zasadywspolpracy" activeClassName="menu_inner" activeStyle={activeStyle}>Zasady
                                    współpracy</NavLink>
                            </li>
                            <li className="menu-li">
                                <NavLink to="/kontakt" activeClassName="menu_inner"
                                         activeStyle={activeStyle}>Kontakt</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <i onClick={showSidebar} className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;

