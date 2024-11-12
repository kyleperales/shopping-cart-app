import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './NavBar.scss'

function NavBar({ totalItems }) {
    const navigate = useNavigate()

    const routeToWelcome = () => {
        navigate('/welcome')
    }
    const routeToCart = () => {
        navigate('/cart')
    }

    return (
        <div className='navbar'>
            <div className='content'>
                <div className='shop-name' onClick={routeToWelcome}>
                    Shoppee Clone
                </div>
                <div className='in-cart' onClick={routeToCart}>
                    In cart: {totalItems}
                </div>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    totalItems: PropTypes.number.isRequired
}

NavBar.defaultProps = {
    totalItems: 1
}

export default NavBar