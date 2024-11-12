import { useState } from 'react'
import './App.css'
import NavBar from './components/navigation-bar/NavBar'
import { Outlet } from "react-router-dom";

function App() {
  const [totalItems, setTotalItems] = useState(0)  
  const [cart, setCart] = useState(new Map([]))

  const onSetCart = (item) => {        
      const newCart = new Map(cart)
      if (item.count === 0) {
        newCart.delete(item.id)
      } else {
        newCart.set(item.id, { ...item })
      }
      setCart(newCart)
      setTotalItems(newCart.size)
  }


  return (
    <>
      <NavBar totalItems={totalItems} />
      <Outlet context={{cart, onSetCart}} />
    </>
  )
}

export default App
