import './newcollection.css';

import photo1 from '../../../images/newcollection_photo1.png';
import photo2 from '../../../images/newcollection_photo2.png';
import photo3 from '../../../images/newcollection_photo3.png';
import { Link } from 'react-router-dom';

function NewCollection() {
    return (
        <div className='newcollection__container'>
            <div className='newcollection__images-block'>
                <div className='images__list-item'>
                    <Link className='images__link' to='/tshirt'><img src={photo1} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>Футболка USA</h4>
                            <div className='item__price'>$129</div>
                        </div></Link>
                </div>
                <div className='images__list-item'>
                    <Link className='images__link' to='/swimsuit'><img src={photo2} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>Купальник Glow</h4>
                            <div className='item__price'>$149</div>
                        </div></Link>
                </div>
                <div className='images__list-item'>
                    <Link className='images__link' to='/sweatshirt'><img src={photo3} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>Свитшот Sweet Shot</h4>
                            <div className='item__price'>$199</div>
                        </div></Link>
                </div>
            </div>
        </div>
    )
}

export default NewCollection;