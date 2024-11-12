import './WelcomePage.scss';

function WelcomePage() {
    return (
        <div className='welcome-page'>
            <div classNam='main-message'>
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
                <button className='start-shopping-btn'> Start Shopping! </button>
            </div>
        </div>
    )
}

export default WelcomePage;