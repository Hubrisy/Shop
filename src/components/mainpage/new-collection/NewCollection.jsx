import './newcollection.css';

import photo1 from '../../../images/newcollection_photo1.png';
import photo2 from '../../../images/newcollection_photo2.png';
import photo3 from '../../../images/newcollection_photo3.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NewCollection() {

    const shirtPrice = useSelector(state => state.item.shirt.price);
    const shirt = useSelector(state => state.item.shirt.item);
    
    const swimsuitPrice = useSelector(state => state.item.swimsuit.price);
    const swimsuit = useSelector(state => state.item.swimsuit.item);

    const sweatshotPrice = useSelector(state => state.item.sweatshot.price);
    const sweatshot = useSelector(state => state.item.sweatshot.item);
    return (
        <div className='newcollection__container'>
            <div className='newcollection__images-block'>
                <div className='images__list-item'>
                    <Link className='images__link' to='/tshirt'><img src={photo1} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>{shirt}</h4>
                            <div className='item__price'>{shirtPrice}</div>
                        </div></Link>
                </div>
                <div className='images__list-item'>
                    <Link className='images__link' to='/swimsuit'><img src={photo2} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>{swimsuit}</h4>
                            <div className='item__price'>{swimsuitPrice}</div>
                        </div></Link>
                </div>
                <div className='images__list-item'>
                    <Link className='images__link' to='/sweatshirt'><img src={photo3} alt='' />
                        <div className='item__description-block'>
                            <h4 className='item__description'>{sweatshot}</h4>
                            <div className='item__price'>{sweatshotPrice}</div>
                        </div></Link>
                </div>
            </div>
        </div>
    )
}

export default NewCollection;