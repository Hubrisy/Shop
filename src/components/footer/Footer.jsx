import LinkTitle from '../links/LinkTitle';
import './footer.css';

import insta from '../../images/inst.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import payment from '../../images/payment.svg';

function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__content-container'>
                <div className='footer__content'>
                    <div className='content__first-line'>
                        <LinkTitle />
                        <div className='content__contacts-block'>
                            <div className='content__phone'>+380-12-3456-789</div>
                            <div className='content__mail'>hello@womazing.com</div>
                        </div>
                    </div>
                    <div className='content__second-line'>
                        <div className='second__line-baseinfo'>
                            <div className="baseinfo__item">© Все права защищены</div>
                            <div className="baseinfo__item">Политика конфиденциальности</div>
                            <div className="baseinfo__item">Публичная оферта</div>
                        </div>
                        <div className='second__line-gears'>
                            <div className="gears__item">Пальто</div>
                            <div className="gears__item">Свитшоты</div>
                            <div className="gears__item">Кардиганы</div>
                            <div className="gears__item">Толстовки</div>
                        </div>
                        <div className='second__line-links-payment'>
                            <div className='second__links-images'>
                                <img src={insta} alt="" />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                            <div className='payment__img'>
                                <img src={payment} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;