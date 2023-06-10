import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItem from '../cartItems/CartItem'
import Formulario from '../formulario/Formulario'
import { useNavigate } from 'react-router-dom'

const CartBody = () => {

  const { cart, getTotalPrice } = useContext(CartProvider)
  const navigate = useNavigate();

  useEffect(() => {
  }, [cart])

  return (

    <div className='cart-body'>

      {cart.length === 0 ?
        <div className='d-flex flex-column m-4 p-4 align-items-center'>
          <h1>No products in cart..</h1>
          <button onClick={() => navigate(`/`)} className='btn btn-danger'>
            <h4>See products</h4>
          </button>
        </div>
        :

        <div className='cart-map'>

          {cart.map((item) => (

            <CartItem key={item.id} {...item} />

          ))}


        </div>

      }
      <Formulario purchase={cart} />
    </div>


  )
}

export default CartBody