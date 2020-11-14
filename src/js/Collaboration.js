import React from 'react';
import picter from "../images/zdjecie6-min.jpeg"
import foto from "../images/zdjecie3-min.jpeg";
import {NavLink} from "react-router-dom";

const Collaboration = () => {
    return (
        <div className="container collaboration">
            <div className="container_nav_coll">
                <h1 className="text">ZASADY WSPÓŁPRACY</h1>
                <h1 className="name">POZNAJ PROCES DZIALANIA</h1>
            </div>
            <div className="container_info">
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
                    <button className="btn btn-lg btn-primary btn-collaboration">
                        <NavLink to="/zasadywspolpracy">Czytaj wiecej</NavLink>
                    </button>
                </p>
                <img className="main-image img-collaboration" src={picter}/>
            </div>
            <section className="image"  style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    );
};

export default Collaboration;