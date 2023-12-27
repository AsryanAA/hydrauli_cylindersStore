import './Card.css'
import more from '../images/more.svg'
import like1 from '../images/like-1.svg'
import like2 from '../images/like-2.svg'
import checked from '../images/checked.svg'
import plus from '../images/plus.svg'
import sneakers from '../images/sneakers-1.jpg'

const Card = (props) => {
    return <div className='container_card'>
        { props.isFavourite ? <img src={like1} alt='like-1' /> : <img src={like2} alt='like-2' /> }
        <img src={ props.imageName } alt='lot1' />
        <p className='mt-5'>{ props.title }</p>

        <div className='wrapper'>
            <div className='wrapper_card'>
                <span className=''>Цена:</span>
                <b>{ props.price } руб.</b>
            </div>

            <div className='is_added'>
                { props.isAdded ? <img src={ checked } alt='checked' /> : <img src={ plus } alt='plus' /> }
                <img className='more' src={more} alt='more'/>
            </div>
        </div>
    </div>
}

export default Card