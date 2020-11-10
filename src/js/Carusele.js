import React, {useState,useEffect} from 'react';
import para from "../images/para.jpg";
import zdjecie1 from "../images/To_1.jpg";
import zdjecie2 from "../images/slub-i-wesele.jpg";
import zdjecie3 from "../images/images.jpg";
import picter from "../images/profilwe.jpg";

function ImgComp ({src}) {
 const imgStyle = {
     width:100+"%",
     height: "auto"
 }
 return <img src={src} alt="slide-img" style={imgStyle}></img>
}


const Carusele = () => {
    const pictures = [<ImgComp src={para}/> , <ImgComp src={zdjecie1}/>, <ImgComp src={zdjecie2}/>, <ImgComp src={zdjecie3}/>]
    const [x, setX] = useState(0);

    const goLeft = () =>{
        (x=== 0) ? setX(-100*(pictures.length-1)) : setX(x+100);
    }
    const goRight = () =>{
        (x=== -100*(pictures.length-1)) ? setX(0) : setX(x-100);
    }

    return (
        <div className="w3-content w3-section">
            {pictures.map((name, index) => {
                return (
                    <div key={index} className="mySlides" style={{transform: `translateX(${x}%)`}}>
                        {name}
                    </div>
                )
            })}

            <button className="btn-left" onClick={goLeft}>
                <i className="fas fa-angle-double-left"></i>
            </button>
            <button className="btn-right"onClick={goRight}>
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    );
};

export default Carusele;


// return (
//     <div className="container references">
//         <div className="container_nav">
//             <h1 className="text">OPINIE</h1>
//             <h1 className="name">Wasze zaufanie jest dla mnie najpiękniejszą nagrodą</h1>
//         </div>
//         <div className="container_reference">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor
//                 dolores eligendi
//                 eum expedita harum illo ipsa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis
//                 cumque dolor dolores eligendi
//                 odit pariatur possimus ratione, reiciendis saepe sint vitae,
//                     psa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores
//                 eligendi
//                 odit pariatur possimus ratione, reiciendis saepe sint vitae
//                 psa labore nemo, consectetur adipisicing elit. Amet, blanditiis corporis cumque dolor dolores
//                 eligendi
//                 odit pariatur possimus ratione, reiciendis saepe sint vitae
//                 </p>
//                 <div className="opinion">
//                     <img className="image_opinion" src={picter}/>
//                     <p className="text_opinion">Marlena & Paweł</p>
//                 </div>
//                 <button className="btn-left" onClick={goLeft}>
//                     <i className="fas fa-angle-double-left"></i>
//                 </button>
//                 <button className="btn-right"onClick={goRight}>
//                     <i className="fas fa-angle-double-right"></i>
//                 </button>
//             </div>
//             <section className="image" style={{backgroundImage: `url(${foto})`}}></section>
//             </div>
//             );
//             };