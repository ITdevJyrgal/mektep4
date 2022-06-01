import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        {/*<p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>*/}
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>342</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3863</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>40</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>
                                    Мектеп жөнүндө кыскача
                                    маалымат
                                    Жаш-Тилек айылындагы Зиямидин Каримбеков атындагы орто мектеби 1985-жылы башталгыч
                                    мектеп болуп ачылып, 1987-жылы 10 жылдык мектепке айланган. 1992-жылга чейин
                                    Жаш-Тилек мектеби деп аталып, ошол жылы мектепке Жаш-Тилек айылынан чыккан
                                    коомдук-саясий ишмер райондун, өз айылынын калыптанышына чоң салым кошкон Зиямидин
                                    Каримбековдун ысымы ыйгарылган. Мектептин экинчи имараты 1991-жылы, үчүнчү имараты
                                    1997-жылы ашар жолу менен курулган. Ал эми азыркы жаңы имараты 2012-жылы курула
                                    баштап, 2014-жылы 1-сентябрда пайдаланууга берилген. Мектепте 16 класстык бөлмө,
                                    китепкана, ашкана, спортзалы, физикалык, химиялык, биологиялык лабораториялары бар.
                                    2016-жылдан бери Ага Хан коомдук фондунун билим берүү программасыны менен биргеликте
                                    иштеп келе жатат. 2018-жылы мектепке тиешелүү 1гектар айдоо жерди тосмолоп
                                    эспарцет,картошка өстүрүлүп,өндүрүлгөн продукция менен мектептин көмөкчү
                                    чарбасындагы ондон ашык бодо малды тоюттандырып,башталгыч класстардын окуучуларынын
                                    шашке тамагына эт,сүт азыктары жана картошка өзүбүздүн табигый азыктардан
                                    жумшалууда.Ошондой эле мектептин алдыңкы мугалимдерине,олимпиаданын жеңүүчүлөрүнө
                                    сыйлыктар берилүүдө.Ал эми быйылкы 2021-2022-окуу жылында Ага Хан коомдук фонду
                                    менен бирге окуп түшүнүү багытындагы идеябыз ишке ашып,ушул таасирдүү жана ыңгайлуу
                                    окуу чөйрөсү ишке ашырылды.Учурда “Китеп окуп жашооңду жаңыла”деген аталыштагы
                                    класстан тышкаркы окуу программасы менен иш алынып барылууда.
                                    Азыркы күндө мектеп инновациялык билим берүүгө ылайыкташкан заманбап технологиялар
                                    менен жабдылып, мугалимдер дээрлик жаңы ноутбуктар, принтерлер менен камсыз
                                    болушкан. Жалпысынан мектепте 342 окуучу окуйт жана 40 мугалим эмгектенет.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;