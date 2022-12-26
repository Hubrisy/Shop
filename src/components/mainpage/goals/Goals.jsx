import './goals.css';

import quality from '../../../images/qualityImg.svg';
import speedImg from '../../../images/speedImg.svg';
import resposibilityImg from '../../../images/responsibilityImg.svg';

function Goals() {
    return (
        <div className='goals__container'>
            <div className='goals__title-block'>Что для нас важно</div>
            <div className='goals__description-block'>
                <div className="goals__description-item">
                    <div className='goals__image-container'><img src={quality} alt="" /></div>
                    <div className='goals__item-name'>Качество</div>
                    <div className='goals__item-description'>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</div>
                </div>
                <div className="goals__description-item">
                <div className='goals__image-container'><img src={speedImg} alt="" /></div>
                    <div className='goals__item-name'>Скорость</div>
                    <div className='goals__item-description'>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</div>
                </div>
                <div className="goals__description-item">
                <div className='goals__image-container'><img src={resposibilityImg} alt="" /></div>
                    <div className='goals__item-name'>Ответственность</div>
                    <div className='goals__item-description'>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</div>
                </div>
            </div>
        </div>
    )
}

export default Goals;