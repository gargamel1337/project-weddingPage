import React from 'react';
import picter from "../images/zdjecie11.jpeg"
import foto from "../images/zdjecie5-min.jpeg";
import {NavLink} from "react-router-dom";
import profilowe from "../images/profilowe-min.jpg";

const Oferts = () => {


    return (
        <div className="container aboutme">
            <div className="container_info">
                <img className="main-image" src={picter}/>
                <div className="container_aboutme_text">
                    <div className="container_nav_about">
                        <h1 className="text">OFERTA USŁUG</h1>
                        <h1 className="name">KONSULTANTA ŚLUBNEGO</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor
                        dolores eligendi
                        eum expedita harum illo ipsa labore nemo, consectetur adipisicing elit. Amet, blanditiis
                        corporis cumque dolor dolores eligendi
                        odit pariatur possimus ratione, reiciendis saepe sint vitae,
                        psa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores
                        eligendi
                        odit pariatur possimus ratione, reiciendis saepe sint vitae
                        psa labore nemo, consectetur adipisicing elit.
                    </p>
                    <button className="btn btn-lg btn-primary btn-oferts">
                        <NavLink to="/oferta">Czytaj wiecej</NavLink>
                    </button>
                </div>
            </div>
            <section className="image" style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    );
};

export default Oferts;