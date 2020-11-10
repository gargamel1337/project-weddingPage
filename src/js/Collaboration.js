import React from 'react';
import picter from "../images/images.jpg"
import foto from "../images/para.jpg";

const Collaboration = () => {
    return (
        <div className="container collaboration">
            <div className="container_nav">
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
                    <button className="btn btn-lg btn-primary btn-collaboration">Czytaj wiecej</button>
                </p>
                <img className="main-image img-collaboration" src={picter}/>
            </div>
            <section className="image"  style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    );
};

export default Collaboration;