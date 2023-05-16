import './contacts.css';

import map from '../../images/map.webp'

function Contacts() {
    return (
        <div className='contacts__container'>
            <div className='contacts__title'>Контакты</div>
            <div className='contacts__subtitle-block'>
                <div className='contacts__lead-word'>Главная</div>
                <div className='contacts__lead-word'>—</div>
                <div className='contacts__second-word'>Контакты</div>
            </div>
            <div className='contacts__map-block'>
                <img src={map} alt="" />
            </div>
            <div className='contacts__contact-block'>
                <div className='contact__info-block'>
                    <div className='contact__text'>Телефон</div>
                    <div className='contact__info'>+380-12-3456-789</div>
                </div>
                <div className='contact__info-block'>
                    <div className='contact__text'>E-mail</div>
                    <div className='contact__info'>info@sitename.com</div>
                </div>
                <div className='contact__info-block'>
                    <div className='contact__text'>Адрес</div>
                    <div className='contact__info'>г. Киев, Тараса Шевченка, 25</div>
                </div>
            </div>
            <div className='contact__us-block'>
                <div className='contact__us-title'>Напишите нам</div>
                <div className='contact__us-inputs'>
                    <div className='inputs__item'>
                        <input type="text" placeholder='Имя' />
                        <div className='input__main-border'></div>
                    </div>
                    <div className='inputs__item'>
                        <input type="text" placeholder='E-mail' />
                        <div className='input__main-border'></div>
                    </div>
                    <div className='inputs__item'>
                        <input type="text" placeholder='Телефон' />
                        <div className='input__main-border'></div>
                    </div>
                    <div className='inputs__item'>
                        <textarea type="text" placeholder='Сообщение' />
                        <div className='input__long-border'></div>
                    </div>
                </div>
                <div className='contact__us-button-block'>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts;