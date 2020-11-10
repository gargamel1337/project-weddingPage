import React from 'react';
import foto from "../images/Cert_ISO_2019.png";
import foto1 from "../images/profilwe.jpg";

const AboutMeSections = () => {


    return (
        <div className="main_section_aboutme" style={{backgroundImage: `url(${foto1})`}}>
            <div>
                <div className="section_aboutme">
                    <div className="container_description_aboutme ">
                        <div className="icone_aboutme">
                            <i className="fas fa-user"></i>
                            <h1 className="nav_aboutme">Troche o mnie :)</h1>
                        </div>
                        <p className="paragraf_aboutme">Chcecie sami zaplanować i zorganizować swój ślub i
                            przyjęcie weselne, ale zależy Wam na odciążeniu siebie oraz najbliższych podczas samej
                            uroczystości?
                            Oferuję Wam koordynację przebiegu przygotowań, ceremonii i wesela.
                            Stworzę dla was plan i scenariusz dnia, będę czuwała nad jego płynnym przebiegiem.
                            A Wy i Wasi bliscy bądźcie mogli być najważniejszymi Gośćmi tego dnia.</p>
                        <p className="paragraf_aboutme">Chcecie sami zaplanować i zorganizować swój ślub i
                            przyjęcie weselne, ale zależy Wam na odciążeniu siebie oraz najbliższych podczas samej
                            uroczystości?
                            Oferuję Wam koordynację przebiegu przygotowań, ceremonii i wesela.
                            Stworzę dla was plan i scenariusz dnia, będę czuwała nad jego płynnym przebiegiem.
                            A Wy i Wasi bliscy bądźcie mogli być najważniejszymi Gośćmi tego dnia.</p>
                        <p className="paragraf_aboutme">Chcecie sami zaplanować i zorganizować swój ślub i
                            przyjęcie weselne, ale zależy Wam na odciążeniu siebie oraz najbliższych podczas samej
                            uroczystości?
                            Oferuję Wam koordynację przebiegu przygotowań, ceremonii i wesela.
                            Stworzę dla was plan i scenariusz dnia, będę czuwała nad jego płynnym przebiegiem.
                            A Wy i Wasi bliscy bądźcie mogli być najważniejszymi Gośćmi tego dnia.</p>
                        <p className="paragraf_aboutme">Chcecie sami zaplanować i zorganizować swój ślub i
                            przyjęcie weselne, ale zależy Wam na odciążeniu siebie oraz najbliższych podczas samej
                            uroczystości?
                            Oferuję Wam koordynację przebiegu przygotowań, ceremonii i wesela.
                            Stworzę dla was plan i scenariusz dnia, będę czuwała nad jego płynnym przebiegiem.
                            A Wy i Wasi bliscy bądźcie mogli być najważniejszymi Gośćmi tego dnia.</p>
                    </div>
                    <div className="certificates">
                        <div className="container_aboutme">
                            <img className="certificat"  src={foto}></img>
                        </div>
                        <div className="container_aboutme">
                            <img className="certificat"  src={foto}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSections;