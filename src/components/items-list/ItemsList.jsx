import { useState } from 'react';
import './ItemsList.scss'
import { MockItems } from '../mock-items';


function Card({ item, setCart }) {

    const [count, setCount] = useState(0);

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
            <div>
                <h1>{item.name}</h1>
            </div>

            <div className='counter'>
                <button onClick={onIncrease}>+</button>
                <input value={count} onChange={onInputChange}></input>
                <button disabled={count === 0} onClick={onDecrease}>-</button>
            </div>

            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
}

function ItemList({ setCart }) {
    return (
        <div>
            <div className='list'>
            {
                MockItems.map((item, index) => (
                    <Card key={item.id} item={item} setCart={setCart}/>
                ))
            }
            </div>
        </div>
    )
}

export default ItemList