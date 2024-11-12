import { useOutletContext } from 'react-router-dom'
import './InCart.scss'

function InCart() {
    const { cart, onSetCart } = useOutletContext()

    const deleteItem = (e) => {
        const item = cart.get(parseInt(e.target.id))
        if (item) {
            item.count = 0
            onSetCart(item)
        }
    }
    
    return (
        <div className='cart'>
            <h1>In Cart</h1>
            { 
                Array.from(cart.entries()).map(([key, value]) => 
                (
                    <div className='item' key={value.id}>
                        <div className='details'>
                            <img src={value.image} alt={value.title} />
                            <span className='title'>{value.title}</span>
                        </div>
                        <div>
                            <span>Price: Php. {value.price}</span>
                        </div>
                        <div>
                            <span>Quantity: {value.count}</span>
                        </div>
                        <div>
                            <span>Total: <span className='total'> Php. {value.count * value.price}</span></span>
                        </div>
                        <button id={value.id} className='delete-btn' onClick={deleteItem}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default InCart