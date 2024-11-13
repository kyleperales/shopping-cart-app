import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound() {
    return (
        <div className="not-found">
            <h2>
                Oops! Page not found.
            </h2>
            <span className='back-to-shop'>
                <Link to="/">Back to the shop</Link>
            </span>
        </div>
    )
}

export default NotFound