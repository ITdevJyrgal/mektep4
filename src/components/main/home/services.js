import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="mailto:tnizaev@mail.ru"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-envelope"/> tnizaev@mail.ru</span></a>
                        <a href="tel:0778007977"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-phone"/> 0778007977</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/> Ош облусу Чоң -Алай району, Жаш -Тилек
көчөсү 163
</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1616730.6668455421!2d70.79757327493378!3d39.960876826686345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac1f285a8665%3A0x2930a63252eec866!2z0J7RiNGB0LrQsNGPINCe0LHQu9Cw0YHRgtGM!5e1!3m2!1sru!2skg!4v1654072732771!5m2!1sru!2skg"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;