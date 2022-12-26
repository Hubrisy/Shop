import './maintop.css';

import girlOne from '../../../images/girl1.png';
import girlTwo from '../../../images/girl2.png';
import girlThree from '../../../images/girl3.png'
import arrow from '../../../images/arrow.svg'

function MainTop(){
    return (
        <div className='maintop__container'>
            <div className='top__info-block'>
                <div className='top__title-description'>
                    <h1>Новые поступления в этом сезоне</h1>
                </div>
                <div className='top__subtitle-description'>
                    <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                </div>
                <div className='top__button-container'>
                    <div className='button__image-block'>
                        <img src={arrow} alt='' />
                    </div>
                    <button className='maintop__button'>
                        Открыть магазин
                    </button>
                </div>
            </div>
            <div className='top__images-block'>
                <img className='top__image-one' src={girlOne} alt='' />
                <img className='top__image-two' src={girlTwo} alt='' />
                <img className='top__image-three' src={girlThree} alt='' />
            </div>
        </div>
    )
}

export default MainTop;