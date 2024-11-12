import PropTypes from 'prop-types';
import './NavBar.scss';

function NavBar({ totalItems }) {
    return (
        <div className='navbar'>
            <div className='content'>
                <div className=''>
                    Shoppee Clone
                </div>
                <div>
                    In cart: {totalItems}
                </div>
            </div>
        </div>
    );
}

NavBar.propTypes = {
    totalItems: PropTypes.number.isRequired
}

NavBar.defaultProps = {
    totalItems: 1
}

export default NavBar