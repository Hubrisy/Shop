import dress from '../../images/dress.svg'
import Womazing from '../../images/WomazingTitle.svg'

function LinkTitle() {
    return (
        <div className='links__title-container'>
            <div className='links__title-block'>
                <img src={dress} alt='' />
                <img src={Womazing} alt='' />
            </div>
            <div className='links__list-block'>
                <div className='links__list-item'>Главная</div>
                <div className='links__list-item'>Магазин</div>
                <div className='links__list-item'>О бренде</div>
                <div className='links__list-item'>Контакты</div>
            </div>
        </div>
    )
}

export default LinkTitle;