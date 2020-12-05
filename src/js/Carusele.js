import React, {useState,useEffect} from 'react';
import zdjecie1 from "../images/slider1.jpg";
import zdjecie2 from "../images/slider2-min.jpg";
import zdjecie3 from "../images/zdjecie9.jpg";


function ImgComp ({src}) {
 const imgStyle = {
    maxWidth:"100%",
     height: "auto",
   // backgroundSize: "cover",
   //  backgroundPosition: "center"
 }
 return <img src={src} alt="slide-img" style={imgStyle}></img>
}


const Carusele = () => {
    const pictures = [ <ImgComp src={zdjecie1}/>, <ImgComp src={zdjecie2}/>, <ImgComp src={zdjecie3}/>]
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
            <div className="text_slider container_nav">
                <h1 className="logo_slider">Marlena Komońska</h1>
                <h1 className="logo_slider">Wedding Planner</h1>
            </div>
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

