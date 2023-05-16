import './modalwindow.css';

function ModalWindow({ active, setActive }) {
    return (
        <div className={active ? 'modal__container active' : 'modal__container'} onClick={() => setActive(false)}>
            <div className='modal__content-block' onClick={e => e.stopPropagation()}>
                <div className='modal__content'>
                    <div className='modal__title'>Заказать обратный звонок</div>
                    <div className='modal__input-block'>
                        <div className='modal__input'>
                            <input type="text" placeholder='Имя' />
                            <div className='modal__border'></div>
                        </div>
                        <div className='modal__input'>
                            <input type="text" placeholder='E-mail' />
                            <div className='modal__border'></div>
                        </div>
                        <div className='modal__input'>
                            <input type="text" placeholder='Телефон' />
                            <div className='modal__border'></div>
                        </div>
                    </div>
                    <div className='modal__button-block'>
                        <button>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;