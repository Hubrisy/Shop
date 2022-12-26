import './links.css';
import LinksContacts from './LinksContacts';

import LinkTitle from './LinkTitle';

function MainLinks() {
    return (
        <div className='main__links-container'>
            <div className='overall__links-container'>
                <LinkTitle />
                <LinksContacts />
            </div>
        </div>
    )
}

export default MainLinks;