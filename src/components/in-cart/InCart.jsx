import { useOutletContext } from 'react-router-dom'

function InCart() {
    const { cart } = useOutletContext()

    console.log(cart)

    return (
        <div>
            <h1>In Cart</h1>
        </div>
    )
}

export default InCart