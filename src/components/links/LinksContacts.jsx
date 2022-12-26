import telephone from '../../images/telephone.svg'
import bag from '../../images/bag.svg'

function LinksContacts() {
    return (
        <div className='links__contacts-bag-container'>
            <div className='links__contacts-and-bag'>
                <div className='links__phone'>
                    <img src={telephone} alt='' />
                    <span>+380-12-3456-789</span>
                </div>
                <div className='links__bag'>
                    <img src={bag} alt='' />
                </div>
            </div>
        </div>
    )
}

export default LinksContacts;