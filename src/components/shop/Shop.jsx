import './shop.css'
import NewCollection from '../mainpage/new-collection/NewCollection'

function Shop() {
    return (
        <div className='shop__container'>
            <div className='shop__title'>Магазин</div>
            <div className="shop__subtitle-block">
                <div className='shop__lead-word'>Главная</div>
                <div className='shop__lead-word'>—</div>
                <div className='shop__second-word'>Магазин</div>
            </div>
            <div className="shop__navigation-block">
                <div className="navigation__item-block">
                    <span>Все</span>
                </div>
                <div className="navigation__item-block">
                    <span>Пальто</span>
                </div>
                <div className="navigation__item-block">
                    <span>Свитшоты</span>
                </div>
                <div className="navigation__item-block">
                    <span>Кардиганы</span>
                </div>
                <div className="navigation__item-block">
                    <span>Толстовки</span>
                </div>
            </div>
            <div className='shop__clothes-amount-block'>
                <div className='clothes-amount'>Показано: 9 из 9 товаров</div>
            </div>
            <div className='shop__assortment-block'>
                <NewCollection />
                <NewCollection />
                <NewCollection />
            </div>
            <div className='shop__clothes-amount-block'>
                <div className='clothes-amount'>Показано: 9 из 9 товаров</div>
            </div>
            <div className='shop__selectpage-button-block'>
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    )
}

export default Shop;