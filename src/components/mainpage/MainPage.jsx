import {Link} from 'react-router-dom'

import Goals from "./goals/Goals";
import NewCollection from "./new-collection/NewCollection";
import Team from "./team/Team";
import MainTop from "./top-page/MainTop";    

import './mainpage.css'

function MainPage(){
    return (
        <div>
            <MainTop />
            <div className='newcollection__title-block'>
                <span>Новая коллекция</span>
            </div>
            <NewCollection />
            <div className='newcollection__button-block'>
                <Link className='button__link' to ='/shop'><button className='newcollection__button'>Открыть магазин</button></Link>
            </div>
            <Goals />
            <Team />
        </div>
    )
}

export default MainPage;