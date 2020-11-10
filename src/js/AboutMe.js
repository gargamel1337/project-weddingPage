import React from 'react';
import { NavLink } from "react-router-dom";
import profilowe from "../images/profilwe.jpg";
import foto from "../images/images.jpg";

const AboutMe = () => {
    return (
        <div className="container aboutme">
            <div className="container_nav_about">
                <h1 className="text">WEDDING PLANNER</h1>
                <h1 className="name">MARLENA KOMOŃSKA</h1>
            </div>
            <div className="container_info">
                <img className="main-image" src={profilowe}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores eligendi
                    eum expedita harum illo ipsa labore nemo,  consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae,
                    psa labore nemo,  consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae
                    psa labore nemo,  consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores eligendi
                    odit pariatur possimus ratione, reiciendis saepe sint vitae
                    <br/>
                    <button className="btn btn-lg btn-primary aboutme">
                        <NavLink to="/o mnie">Czytaj wiecej</NavLink>
                    </button>
                </p>
            </div>
            <section className="image"  style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    );
};

export default AboutMe;