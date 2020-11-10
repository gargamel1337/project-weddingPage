import React, {useState} from 'react';
import zdjecie1 from "../images/To_1.jpg";
import zdjecie2 from "../images/slub-i-wesele.jpg";
import zdjecie3 from "../images/images.jpg";



// function currentDiv(n) {
//     const [picture, setPicture] = useState(false)
//     showDivs(slideIndex = n);
// }
//
// function showDivs(n) {
//     let i;
//     let x = picture; //document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("demo");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//     }
//     x[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " w3-opacity-off";
// }


// <div className="container_info">
//     <div className="w3-content" >
//         <img className="mySlides" src={zdjecie1} style="width:100%;display:none"/>
//         <img className="mySlides" src={zdjecie2} style="width:100%"/>
//         <img className="mySlides" src={zdjecie3} style="width:100%;display:none"/>
//
//         <div className="w3-row-padding w3-section">
//             <div className="w3-col s4">
//                 <img className="demo w3-opacity w3-hover-opacity-off" src={zdjecie1}
//                      style="width:100%;cursor:pointer" onClick="currentDiv(1)"/>
//             </div>
//             <div className="w3-col s4">
//                 <img className="demo w3-opacity w3-hover-opacity-off" src={zdjecie3}
//                      style="width:100%;cursor:pointer" onClick="currentDiv(2)"/>
//             </div>
//             <div className="w3-col s4">
//                 <img className="demo w3-opacity w3-hover-opacity-off" src={zdjecie1}
//                      style="width:100%;cursor:pointer" onClick="currentDiv(3)"/>
//             </div>
//         </div>
//     </div>
// </div>

const Picters = () => {
    return (
        <div className="container instagram ">
            <div className="container_nav ">
                <h1 className="text">INSTAGRAM</h1>
                <h1 className="name">@marlenakomonska</h1>
            </div>
        </div>
    );
};

export default Picters;