import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './bag.css';

function Bag() {

    const dispatch = useDispatch();
    const bag = useSelector(state => state.bag.bag)
    
    const bagClear = () => {
        dispatch({type:'CLEAR_ITEM'})
    }
    
    // const reloadPage = () => {
    //     window.location.reload(false)
    // }

    // const combineFunc = () => {
    //     bagClear();
    //     reloadPage(false);
    // }
    return (
        <div className='bag__container'>
            <div className='bag__title'>Корзина</div>
            <div className='bag__subtitle-container'>
                <div className='bag__lead-word'>Главная</div>
                <div className='bag__lead-word'>—</div>
                <div className='bag__second-word'>Корзина</div>
            </div>
            <div className='bag__products-list'>
                <div className='bag__products-branches-block'>
                    <div className='bag__product-title-text' style={{width:'300px'}}>
                        <span>Товар</span>
                    </div>
                    <div className='bag__items-title-block'>
                        <span>Цена</span>
                    </div>
                    <div>
                    <span>Количество</span>
                    </div>
                </div>
                <div className='bag__border'></div>
                <div className='bag__product-block'>
                    <div>
                        {bag.map((item) => {
                            return (
                                <div key = {item.id} style={
                                    {display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'15px'}
                                }>
                                    <div style={{width:'300px'}}>
                                        <span>{item.item}</span>
                                    </div>
                                    <div style={{marginRight:'55px'}}>
                                        <span>{item.price}</span>
                                    </div>
                                    <div style={{marginRight:'45px'}}>
                                        <span>{item.amount}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='bag__function-block'>
                    <div className='bag__coupon-block'>
                        <div className='bag__couponText-block'>
                            <input type="text" placeholder='Введите купон' />
                            <div className='bag__coupon-border'></div>
                        </div>
                        <div className='bag__button-container'>
                            <button>Применить купон</button>
                        </div>
                    </div>
                    <div className='bag__reload-button'>
                        <div className='bag__button-container'>
                            <button onClick={() => bagClear()}>Очистить корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bag__confirmButton-block'>
                <div className='bag__finalPrice-block'>
                    <div className='bag__final-text'>Итого:</div>
                    <div className='bag__final-price'>sum</div>
                </div>
                <div className='bag__confirm-button'>
                    <Link to='/order'><button>Оформить заказ</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Bag;