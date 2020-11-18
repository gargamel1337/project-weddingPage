import React, {useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";





const Header = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);


    const activeStyle = {
        color: "#cb997e",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "10px 15px",
    }


    return (
        <header>
            <div className="container main_menu">
                <div className={isMenuOpened ? "activmenu" : "burger"}>
                    <div className="container_menu">
                        <div className="container_logo">
                            <h1 className="logo">
                                <NavLink to="/" activeClassName="logo-link"><i className="fab fa-aviato"></i></NavLink>
                            </h1>
                            <i onClick={() => setIsMenuOpened((prevState) => !prevState)} className="fas fa-bars"></i>
                            <i onClick={() => setIsMenuOpened((prevState) => !prevState)} className="fas fa-times"></i>

                        </div>
                        <nav className="menu">
                            <ul className="menu-list">
                                <li className="menu-li">
                                    <NavLink to="/omnie" activeClassName="menu_inner main_said"
                                             activeStyle={activeStyle}>O
                                        mnie</NavLink>
                                </li>
                                <li className="menu-li">
                                    <NavLink to="/oferta" activeClassName="menu_inner"
                                             activeStyle={activeStyle}>Oferta</NavLink>
                                </li>
                                <li className="menu-li">
                                    <NavLink to="/zasadywspolpracy" activeClassName="menu_inner"
                                             activeStyle={activeStyle}>Zasady
                                        współpracy</NavLink>
                                </li>
                                <li className="menu-li">
                                    <NavLink to="/kontakt" activeClassName="menu_inner"
                                             activeStyle={activeStyle}>Kontakt</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
