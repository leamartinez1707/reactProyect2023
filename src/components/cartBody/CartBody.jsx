import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItem from '../cartItems/CartItem'

const CartBody = () => {

  const { deleteItem, cart, total, countProds } = useContext(CartProvider)

  useEffect(() => {
    
    
  }, [cart])
  

  return (
    <>
    <div className='cart-body'>
    <div className='row'>

      <div className='col-12 m-5'>
        <h1>Tengo en carrito : {cart.length}</h1>
      </div>
    </div>

      <div className="row">

        <div className='itemList-prod col-6'>
          {cart.map((item) => (
            <CartItem deleteItem={deleteItem} key={item.id} {...item} />
          ))}
        </div>

        <div className='cart-body bg-warning'>
          <h1>Total de productos:  {countProds}</h1>
          <h2>Precio a pagar: $ {total}</h2>
        </div>

      </div>
      </div>
      </>

      )
}

      export default CartBody