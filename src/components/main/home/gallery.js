import React from 'react';
import img1 from './../../../images/img1.png'
import img2 from './../../../images/img2.png'
import img3 from './../../../images/img3.png'
import img4 from './../../../images/img4.png'
import img5 from './../../../images/img5.png'

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="container">
                <div className="gallery-general">
                    <h1 className="gallery-general__title">Мектеп галереясы</h1>
                    <div>
                        <img src={img1} alt="img"/>
                        <span>
                        <img src={img2} alt="img"/>
                        <img src={img3} alt="img"/>
                        </span>
                        <span>
                        <img src={img4} alt="img"/>
                        <img src={img5} alt="img"/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;