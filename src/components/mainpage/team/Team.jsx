import {Link} from 'react-router-dom'

import './team.css'

import teamPhoto from '../../../images/teamphoto.png'

function Team(){
    return (
        <div className='team__container'>
            <div className='team__title-block'>Команда мечты Womazing</div>
            <div className='team__info-block'>
                <div className='team__image-block'>
                    <img src={teamPhoto} alt="" />
                </div>
                <div className='team__description-block'>
                    <div className='team__title'>Для каждой</div>
                    <div className="team__info">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</div>
                    <div className="team__info">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</div>
                    <Link className='team__link' to = '/aboutus'><div className='team__about-brand'>Подробнее о бренде</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Team;