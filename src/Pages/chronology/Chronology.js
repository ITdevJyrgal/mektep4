import React, {useEffect, useState} from 'react';
import "../../styles/Chronology/chronology.scss"
import {media} from "../../components/media";
import {api} from "../../http/api";
import Spiner from "../../components/main/Spiner";

const Chronology = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        api("/chronology")
            .then(({data}) => {
                setData(data)
            })
    }, [])
    console.log(data)
    
    return (
        <section id="chronology" style={{minHeight: "75vh"}}>
            <div className="container">
                <h1>Мектеп хронологиясы</h1>
                <div className="chronology__general">
                    {
                        data.length > 0 ?
                            data.map(el => (
                                <div className="chronology__general--datas">
                                    <div className="chronology__general--datas--data">
                                        {
                                            el.url_video?.length > 0 ?
                                                <iframe id="ytplayer" type="text/html"
                                                        style={{width: media(280, 500), height: media(150, 300)}}
                                                        src={el.url_video}
                                                        frameBorder="0"/> : <img src={el.image} alt="" style={{
                                                    width: media(280, 500),
                                                    height: media(150, 300)
                                                }}/>

                                        }
                                        <div className="chronology__general--datas--data__titles" style={{width: media(300,610)}}>
                                            <h3>{el.name}</h3>
                                            <p>{el.pub_date}</p>
                                            <h6>{el.participants}</h6>
                                            <h5>Уюштуруучу: {el.organizer}</h5>
                                            <span>{el.description}</span>
                                        </div>
                                    </div>
                                    <p>{el.description_info}</p>
                                </div>

                            ))
                            :
                            <div style={{marginTop: "150px"}}>
                                <Spiner/>
                            </div>

                    }
                </div>
            </div>
        </section>
    );
};

export default Chronology;