import React, {useState} from 'react';
import picter from "../images/profilwe.jpg";
import foto from "../images/slub-i-wesele.jpg";


function Opinion1 () {
    const imgStyle = {
        width:100+"%",
        height: "auto"
    }
    return (
        <div  className="opinion_slider" style= {imgStyle}>
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
                odit pariatur possimus ratione, reiciendis saepe sint vitae
            </p>
            <div className="opinion">
                <img className="image_opinion" src={picter}/>
                <p className="text_opinion">Marlena & Paweł</p>
            </div>
        </div>
)
}
function Opinion2 () {
    const imgStyle = {
        width:100+"%",
        height: "auto"
    }
    return (
        <div  className="opinion_slider" style= {imgStyle}>
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
                odit pariatur possimus ratione, reiciendis saepe sint vitae
            </p>
            <div className="opinion">
                <img className="image_opinion" src={picter}/>
                <p className="text_opinion">Martyna & Przemek</p>
            </div>
        </div>
    )
}
function Opinion3 () {
    const imgStyle = {
        width:100+"%",
        height: "auto"
    }
    return (
        <div className="opinion_slider" style= {imgStyle}>
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
                odit pariatur possimus ratione, reiciendis saepe sint vitae
            </p>
            <div className="opinion">
                <img className="image_opinion" src={picter}/>
                <p className="text_opinion">Magda & Tomek</p>
            </div>
        </div>
    )
}

const References = () => {

    const opinion = [<Opinion1/>,<Opinion2/>,<Opinion3/>]
    const [x, setX] = useState(0);

    const goLeft = () =>{
        (x=== 0) ? setX(-100*(opinion.length-1)) : setX(x+100);
    }
    const goRight = () =>{
        (x=== -100*(opinion.length-1)) ? setX(0) : setX(x-100);
    }


    return (
        <div className="container references">
            <div className="container_nav_references">
                <h1 className="text">OPINIE</h1>
                <h1 className="name">Wasze zaufanie jest dla mnie najpiękniejszą nagrodą</h1>
            </div>
            <div className="container_reference">
                {opinion.map((name, index) => {
                    return (
                        <div key={index} className="opinion_slider" style={{transform: `translateX(${x}%)`}} >
                            {name}
                        </div>
                    )})}
                <button className="btn-left_opinion" onClick={goLeft}>
                    <i className="fas fa-angle-double-left"></i>
                </button>
                <button className="btn-right_opinion"onClick={goRight}>
                    <i className="fas fa-angle-double-right"></i>
                </button>
            </div>

            <section className="image" style={{backgroundImage: `url(${foto})`}}></section>
        </div>
    )
};

export default References;