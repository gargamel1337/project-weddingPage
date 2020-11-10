import React from 'react';
import foto from "../images/images2.jpg";

const Statistick = () => {
    return (
        <div>
            <div className="section">
                <h2 className="section-text">Jakiś fajny tytuł</h2>
            </div>
            <div className="section-block">
                <div className="block">
                    <div className="block-select">
                        <div className="section-img">
                            <p className="empty-person"></p>
                            <i className="far fa-calendar-check"></i>
                        </div>
                        <h4 className="block-value">3</h4>
                        <p className="block-text">sezony slubne na rynku</p>
                    </div>
                </div>
                <div className="block">
                    <div className="block-select">
                        <div className="section-img">
                            <p className="empty-eye"></p>
                            <i className="fas fa-glass-cheers"></i>
                        </div>
                        <h4 className="block-value">50+</h4>
                        <p className="block-text">zorganizowanych wesel</p>
                    </div>
                </div>
                <div className="block">
                    <div className="block-select">
                        <div className="section-img">
                            <p className="empty-catalog"></p>
                            <i className="fas fa-battery-full"></i>
                        </div>
                        <h4 className="block-value">100%</h4>
                        <p className="block-text">energii w to by ten dzień był piękny</p>
                    </div>
                </div>
            </div>
            <section className="image"  style={{backgroundImage: `url(${foto})`}}></section>

        </div>
    )
};

export default Statistick;