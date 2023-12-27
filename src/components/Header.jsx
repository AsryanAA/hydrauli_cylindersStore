import './Header.css'
import logo from '../images/logo.png'
import cart from '../images/cart.svg'
import heart from '../images/heart.svg'
import profile from '../images/profile.svg'

const Header = () => {
    return <header>
        <div className='container'>
            <img src={logo} alt='logo' className='logo'/>
            <div>
                <h2>Hydraulic cylinders</h2>
                <p>Магазин лучших гидроцилидров</p>
            </div>
        </div>

        <ul>
            <li>
                <img src={cart} alt='cart'/>
                <b>12105 руб.</b>
            </li>

            <li>
                <img src={heart} alt='heard'/>
                <span>Закладки</span>
            </li>

            <li>
                <img src={profile} alt='profile'/>
                <span>Профиль</span>
            </li>
        </ul>
    </header>
}

export default Header