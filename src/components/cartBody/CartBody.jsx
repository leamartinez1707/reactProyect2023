import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItem from '../cartItems/CartItem'
import Formulario from '../formulario/Formulario'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const CartBody = () => {

  const { cart, cleanCart } = useContext(CartProvider)
  const navigate = useNavigate();

  useEffect(() => {
  }, [cart])

  return (

    <div className='cart-body'>
      {cart.length === 0 ?
        <div className='m-2 p-3'>
          <h1>No products in cart..</h1>
          <button onClick={() => navigate(`/`)} className='btn btn-danger'>
            <h4>Go shop</h4>
          </button>
        </div>
        :
        
        <div className='cart-map'>
          <div className='m-1 p-2'><h1>Cart items</h1></div>
          {cart.map((item) => (

            <CartItem key={item.id} {...item} />

          ))}

        <div><Button variant='secondary' onClick={() => cleanCart()}>
          Clean cart
          </Button></div>
        </div>
      
      }
      <Formulario purchase={cart} />
    </div>


  )
}

export default CartBody