import { MockItems } from '../mock-items';
import Card from './Card/Card';
import './ItemsList.scss';

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