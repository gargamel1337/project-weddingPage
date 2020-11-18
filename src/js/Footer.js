import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="contact">
                    <div className="contact-one">
                        <i className="fas fa-phone-volume"></i>
                        <h2 className="contact-header">Zadzwoń </h2>
                        <p className="contact-text"> +48 608 307 050</p>
                    </div>
                    <div className="contact-two">
                        <a href="#"><i className="fas fa-envelope-open-text"/></a>
                        <h2 className="contact-header">Napisz</h2>
                        <p className="contact-text">marlena.komonska@wp.pl</p>
                    </div>

                    <div className="contact-three">
                        <a href="https://www.facebook.com/marlena.komonska"><i className="fab fa-facebook-square"/></a>
                        <a href="https://www.facebook.com/marlena.komonska"><i className="fab fa-instagram"/></a>
                    </div>
                </div>
                <div className="contact-footer">
                    <p className="footer">WeddingTime Marlena Komońska</p>
                    <p className="footer footer2">
                        <NavLink to="/registrationpanel" activeClassName="registration-link">panel administracyjny</NavLink></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


//  const burger ({ open, ...props }) => (
//     <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
//         <div className="bar1" key="b1" />
//         <div className="bar2" key="b2" />
//         <div className="bar3" key="b3" />
//     </div>
// );