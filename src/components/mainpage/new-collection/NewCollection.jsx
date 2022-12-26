import './newcollection.css';

import photo1 from '../../../images/newcollection_photo1.png';
import photo2 from '../../../images/newcollection_photo2.png';
import photo3 from '../../../images/newcollection_photo3.png';

function NewCollection() {
    return (
        <div className='newcollection__container'>
            <div className='newcollection__title'>Новая коллекция</div>
            <div className='newcollection__images-block'>
                <div className='images__list-item'>
                    <img src={photo1} alt='' />
                    <div className='item__description-block'>
                        <h4 className='item__description'>Футболка USA</h4>
                        <div className='item__price'>$129</div>
                    </div>
                </div>
                <div className='images__list-item'>
                    <img src={photo2} alt='' />
                    <div className='item__description-block'>
                        <h4 className='item__description'>Купальник Glow</h4>
                        <div className='item__price'>$149</div>
                    </div>
                </div>
                <div className='images__list-item'>
                    <img src={photo3} alt='' />
                    <div className='item__description-block'>
                        <h4 className='item__description'>Свитшот Sweet Shot</h4>
                        <div className='item__price'>$199</div>
                    </div>
                </div>
            </div>
            <div className='newcollection__button-block'>
                <button className='newcollection__button'>Открыть магазин</button>
            </div>
        </div>
    )
}

export default NewCollection;