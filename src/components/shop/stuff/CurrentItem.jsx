import './currentitem.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CurrentItem(props) {

    const dispatch = useDispatch();
    const getValue = (e) => {
        props.setIsAmountItemValue(e.target.value);
        console.log(e.target.value)
    }

    const getAmountValue = () => {
         const bag = {
            item: props.itemName,
            price: props.price,
            amount: props.amountItemValue,
            id: Date.now(),
        }
        dispatch({ type: 'PUSH_ITEM', payload: bag })
    }
    return (
        <div className='currentItem__block'>
            <div className='currentItem__title'>{props.title}</div>
            <div className='currentItem__subtitle-block'>
                <div className='currentItem__lead-word'>Главная</div>
                <div className='currentItem__lead-word'>—</div>
                <div className='currentItem__lead-word'>{props.listItem}</div>
                <div className='currentItem__lead-word'>—</div>
                <div className='currentItem__second-word'>{props.itemName}</div>
                <div>{props.text}</div>
            </div>
            <div className='currentItem__info-block'>
                <div className='currentItem__img-block'>
                    <img src={props.img} alt="" />
                </div>
                <div className='currentItem__description-block'>
                    <div className='currentItem__price'>{props.price}</div>
                    <div className='currentItem__size-block'>
                        <div className='currentItem__size-text'>Выберите размер</div>
                        <div className='currentItem__size-buttons'>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                    <div className='currentItem__color-block'>
                        <div className='currentItem__color-text'>Выберите цвет</div>
                        <div className='currentItem__color-buttons'>
                            <div className="currentItem__choose-color brown"></div>
                            <div className="currentItem__choose-color gray"></div>
                            <div className="currentItem__choose-color pink"></div>
                            <div className="currentItem__choose-color yellow"></div>
                        </div>
                    </div>
                    <div className='currentItem__addItem-block'>
                        <input placeholder='1' value={props.amountItemValue} onChange={getValue} />
                        <button onClick={() => {getAmountValue()}}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
            <div className='current__similiar-products-block'>
                <div className='current__similiar-title'>Связанные товары</div>
                <div className="current__similiar-products">
                    <div className='current__similiar-item'>
                        <Link className='current__similiar-link' to={props.secondItemLink}><img src={props.secondItemImg} alt="" />
                            <div className='current__similiar-itemDescription-block'>
                                <div className='current__similar-itemText'>{props.secondItemText}</div>
                                <div className='current__similiar-itemPrice'>{props.secondItemPrice}</div>
                            </div>
                        </Link>
                    </div>
                    <div className='current__similiar-item'>
                        <Link className='current__similiar-link' to={props.thirdItemLink}><img src={props.thirdItemImg} alt="" />
                            <div className='current__similiar-itemDescription-block'>
                                <div className='current__similar-itemText'>{props.thirdItemText}</div>
                                <div className='current__similiar-itemPrice'>{props.thirdItemPrice}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentItem;