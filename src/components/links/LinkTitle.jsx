import dress from '../../images/dress.svg'
import Womazing from '../../images/WomazingTitle.svg'

import {Link} from 'react-router-dom';

function LinkTitle() {
    return (
        <div className='links__title-container'>
            <div className='links__title-block'>
                <img src={dress} alt='' />
                <img src={Womazing} alt='' />
            </div>
            <div className='links__list-block'>
                <Link className='links__list-item' to='/mainpage'><div>Главная</div></Link>
                <Link className='links__list-item' to='/shop'><div>Магазин</div></Link>
                <Link className='links__list-item' to='/aboutus'><div>О бренде</div></Link>
                <Link className='links__list-item' to='/contacts'><div>Контакты</div></Link>
            </div>
        </div>
    )
}

export default LinkTitle;