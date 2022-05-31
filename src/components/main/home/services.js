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
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-envelope"/> balanchaevbalancha@gmail.com</span></a>
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-brands fa-instagram"/> balancha_mektebi</span></a>
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-brands fa-facebook-f"/> balancha_mektebi</span></a>
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-phone"/> 0 (999) 99 99 99</span></a>
                        <a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-solid fa-location-dot"/> Кыргыз Республикасы, Ысык-Көл облусу,<br/>
                            Ысык-Көл району, Тору-Айгыр айылы,<br/> Кентибаев көчөсү №7 . 722121</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.339811248767!2d72.19871311522498!3d39.55194481570083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bec7d3f4e8d215%3A0x8daf2978c2ec8442!2z0KfQvtC9LdCQ0LvQsNC5INGA0LDQudC-0L3QtNGD0Log0LHQuNC70LjQvCDQsdC10YDRg9GDINCx0L7Qu9GD0LzRgw!5e0!3m2!1sru!2skg!4v1653489451982!5m2!1sru!2skg"
                             style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;