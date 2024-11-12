import { useState } from 'react'
import './App.css'
import NavBar from './components/navigation-bar/NavBar'
import ItemList from './components/items-list/ItemsList'

function App() {
  const [totalItems, setTotalItems] = useState(0)  
  const [cart, setCart] = useState(new Map([]))

  const onSetCart = (item) => {        
      const newCart = new Map(cart)
      newCart.set(item.id, { ...item })
      setCart(newCart)
      setTotalItems(newCart.size)
  }


  return (
    <>
      <NavBar totalItems={totalItems} />
      <ItemList setCart={onSetCart} />
    </>
  )
}

export default App
