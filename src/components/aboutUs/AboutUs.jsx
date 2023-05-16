import { Link } from 'react-router-dom';

import './aboutUs.css'

import aboutPhotoOne from '../../images/about-photoOne.png';
import aboutPhotoTwo from '../../images/about-photoTwo.png';

function AboutUs() {
    return (
        <div className='about__container'>
            <div className='about__title-block'>
                <div className='about__title'>О бренде</div>
                <div className='about__subtitle-block'>
                    <span className='about__lead-word'>Главная</span>
                    <span className='about__lead-word'>—</span>
                    <span className='about__second-word'>О бренде</span>
                </div>
            </div>
            <div className='about__info-block'>
                <div className='info__block-one'>
                    <img src={aboutPhotoOne} alt="" />
                    <div className='block__general-description'>
                        <div className='block__general-title'>Идея и женщина</div>
                        <div className='block__general-text-container'>
                            <div className='block__general-textcontent'>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером</div>
                            <div className='block__general-textcontent'>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </div>
                        </div>
                    </div>
                </div>
                <div className='info__block-two'>
                    <div className='block__general-description'>
                        <div className='block__general-title'>Магия в деталях</div>
                        <div className='block__general-text-container'>
                            <div className='block__general-textcontent'>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</div>
                            <div className='block__general-textcontent'>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </div>
                        </div>
                    </div>
                    <img src={aboutPhotoTwo} alt="" />
                </div>
            </div>
            <div className='about__button-container'>
                <Link className='button__link' to='/shop'><button>Перейти в магазин</button></Link>
            </div>
        </div>
    )
}

export default AboutUs;