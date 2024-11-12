import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from './Card/Card'
import './ItemsList.scss'

function ItemList() {
    const { onSetCart } = useOutletContext()
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error('Error fetching items:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchItems()
    }, [])

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            { !isLoading && items.length === 0 && <div>No items found</div> }
            { !isLoading && items.length > 0 &&
                <div className='list'>
                    {
                        items.map((item, index) => (
                            <Card key={item.id} item={item} setCart={onSetCart}/>
                        ))
                    }
                </div>            
            }
        </div>
    )
}

export default ItemList