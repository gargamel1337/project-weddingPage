import React from 'react';
import picter from "../images/slub-i-wesele.jpg"
import foto from "../images/To_1.jpg";
import {NavLink} from "react-router-dom";

const Oferts = () => {


    return (
        <div className="container oferts">
            <div className="container_nav_offert">
                <h1 className="text">OFERTA</h1>
                <h1 className="name">USŁUGA KONSULTANTA ŚLUBNEGO</h1>
            </div>
            <div className="container_info">
                <img className="main-image" src={picter}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor
                    dolores eligendi
                    eum expedita harum illo ipsa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis
                    cumque dolor dolores eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae,
                    psa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores
                    eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae
                    psa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores
                    eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae<br/>
                    <button className="btn btn-lg btn-primary btn-oferts">
                        <NavLink to="/oferta">Czytaj wiecej</NavLink>
                    </button>
                </p>
            </div>
            <section className="image"  style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    );
};

export default Oferts;