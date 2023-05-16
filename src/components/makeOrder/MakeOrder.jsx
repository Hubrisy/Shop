import { Link } from 'react-router-dom';
import './makeorder.css';

function MakeOrder() {
    return (
        <div className='order__container'>
            <div className='order__title'>Оформление заказа</div>
            <div className='order__subtitle-block'>
                <div className='order__lead-word'>Главная</div>
                <div className='order__lead-word'>—</div>
                <div className='order__second-word'>Оформление заказа</div>
            </div>
            <div className='order__content-block'>
                <div className='order__data-block'>
                    <div className='order__data-info'>
                        <div className='order__data-title'>Данные покупателя</div>
                        <div className='order__data-list'>
                            <div className='order__input-block'>
                                <input placeholder='Имя' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='E-mail' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='Телефон' />
                                <div className='order__border'></div>
                            </div>
                        </div>
                    </div>
                    <div className='order__data-info'>
                        <div className='order__data-title'>Адрес получателя</div>
                        <div className='order__data-list'>
                            <div className='order__input-block'>
                                <input placeholder='Страна' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='Город' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='Улица' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='Дом' />
                                <div className='order__border'></div>
                            </div>
                            <div className='order__input-block'>
                                <input placeholder='Квартира' />
                                <div className='order__border'></div>
                            </div>
                        </div>
                    </div>
                    <div className='order__data-info'>
                        <div className='order__data-title'>Комментарии</div>
                        <div className='order__data-list'>
                            <div className='order__input-block'>
                                <textarea placeholder='Комментарий...' />
                                <div className='order__textarea-border'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order__and-payment-block'>
                    <div className='order__your-order'>
                        <div className='order__data-title'>Ваш заказ</div>
                        <div className='your__order-data'>
                            <div className='your__order-list'>
                                <span>Товар :</span>
                                <span>Всего :</span>
                            </div>
                            <div className='your__order-list'>
                                <span>item</span>
                                <span>item-price</span>
                            </div>
                            <div className='your__order-final'>
                                <span>in total</span>
                                <span>final price</span>
                            </div>
                        </div>
                    </div>
                    <div className='order__payment-method'>
                        <div className='order__data-title'>Способы оплаты</div>
                        <div className='order__checkbox-block'>
                            <div className='order__checkbox-item'>
                                <div className='order__custom-checkbox'>
                                    <input type="checkbox" />
                                </div>
                                <div className='order__payment-type'>Оплата наличными</div>
                            </div>
                            <div className='order__checkbox-item'>
                                <div className='order__custom-checkbox'>
                                    <input type="checkbox" />
                                </div>
                                <div className='order__payment-type'>Оплата картой</div>
                            </div>
                        </div>
                        <div className='order__button-block'>
                            <Link to ='/orderrecived'><button>Разместить заказ</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeOrder;