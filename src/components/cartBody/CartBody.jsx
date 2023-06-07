import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'

const CartBody = () => {

  const {cart} = useContext(CartProvider)

  useEffect(() => {
    
    console.log(cart)
  }, [cart])

  return (
    <div>
        
        <h1>Cart body</h1>
        {/* <div>
          {cart.map((item) => (
            <Item inCart key={item.price} {...item}/>
          ))}
          
        </div> */}
      <div>

      <h1>Tengo en carrito : {cart.length}</h1>
      </div>
        
    </div>
  )
}

export default CartBody