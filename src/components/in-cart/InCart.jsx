import { useNavigate, useOutletContext } from 'react-router-dom'
import './InCart.scss'
import { useMemo } from 'react'

function InCart() {
    const { cart, onSetCart } = useOutletContext()
    const navigate = useNavigate()

    const totalPrice = useMemo(() => {
        return Array.from(cart.values()).reduce((total, item) => (Math.round((total + (item.count * item.price)) * 100) / 100), 0)
    }, [cart])

    const deleteItem = (e) => {
        const item = cart.get(parseInt(e.target.id))
        if (item) {
            item.count = 0
            onSetCart(item)
        }
    }
    
    const continueShopping = () => {
        navigate('/shop')
    }
    
    return (
        <div>
            <div className='sub-header'>
                <div className='content'>
                    <span className='continue-shopping'
                        onClick={continueShopping}>
                        Continue shopping
                    </span>
                    <span className='cart-total'>
                        Cart Total: 
                        <span className='total'>
                            Php. {
                               totalPrice
                            }
                        </span>
                    </span>
                </div>
            </div>
            <div className='cart'>
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
        </div>
    )
}

export default InCart