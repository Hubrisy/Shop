import './orderrecived.css';
import {Link} from 'react-router-dom'

import success from '../../images/success.png';

function OrderRecived(){
    return(
        <div className='recived__container'>
            <div className='recived__title'>Заказ получен</div>
            <div className="recived__subtitle-block">
                <div className='recived__lead-word'>Главная</div>
                <div className='recived__lead-word'>—</div>
                <div className='recived__lead-word'>Оформление заказа</div>
                <div className='recived__lead-word'>—</div>
                <div className='recived__second-word'>Заказ получен</div>
            </div>
            <div className='recived__content-block'>
                <div className='recived__order-success'>
                    <div className='recived__order-img'>
                        <img src={success} alt="" />
                    </div>
                    <div className='recived__order-text'>
                        <div className='recived__order-title'>Заказ успешно оформлен</div>
                        <div className='recived__order-subtitle'>Мы свяжемся с вами в ближайшее время!</div>
                    </div>
                </div>
                <div className='recived__button-block'>
                   <Link to ='/mainpage'><button>Перейти на главную</button></Link> 
                </div>
            </div>
        </div>
    )
}

export default OrderRecived;