
import { useState } from 'react'
import './Card.scss'

function Card({ item, setCart }) {
    const [count, setCount] = useState(0)

    const onIncrease = () => {
        setCount(count + 1)
    }

    const onDecrease = () => {
        setCount((prevCount) => {
            if (prevCount === 0) {
                return 0
            }

            return prevCount - 1
        })
    }

    const onInputChange = (e) => {
        setCount(parseInt(e.target.value))
    }

    const onAddToCart = () => {
        setCart({ ...item, count })
    }

    return (
        <div className='card'>
            <div className='item'>
                <img src={item.image} alt={item.title} />
                <div className='details'>
                    <span>{item.title}</span>
                    <div className='price'>
                        <span>Php. {item.price}</span>
                        <span> 
                            <span className="fa fa-star"></span>
                            {item.rating.rate}
                        </span>
                    </div>
                </div>
            </div>

            <div className='counter'>
                <button className='counter-btn' onClick={onIncrease}>+</button>
                <input className='counter-input' value={count} onChange={onInputChange}></input>
                <button className='counter-btn' disabled={count === 0} onClick={onDecrease}>-</button>
            </div>

            <button className='update-cart-btn' onClick={onAddToCart}>Update cart</button>
        </div>
    )
}

export default Card