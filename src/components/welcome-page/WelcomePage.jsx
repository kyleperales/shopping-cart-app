import { useNavigate } from 'react-router-dom';
import './WelcomePage.scss';

function WelcomePage() {
    const navigate = useNavigate();

    const routeToShop = () => {
        navigate('/shop');
    }

    return (
        <div className='welcome-page'>
            <div className='main-message'>
                <h1>Welcome to our store</h1>
                <h4>
                    Your one stop shop for all your needs
                </h4>
            </div>
            <div className='other-message'>
                <p>
                    We have a wide range of products for you to choose from.
                    Click on the products link to view our products
                </p>
                <button
                    onClick={routeToShop}
                    className='start-shopping-btn'>
                        Start Shopping!
                </button>
            </div>
        </div>
    )
}

export default WelcomePage;