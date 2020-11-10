import React from 'react';

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
                        <i className="fas fa-envelope-open-text"></i>
                        <h2 className="contact-header">Napisz</h2>
                        <p className="contact-text"> marlena.komonska@wp.pl</p>
                    </div>
                    <div className="contact-three">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="contact-footer">
                    <p className="footer">WeddingTime Marlena Komońska</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;