import React, { useContext, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartProvider } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cart } = useContext(CartProvider);

  useEffect(() => {
    
    console.log(cart)
  }, [cart])
  

  return (

    <>
      
        <div className="bag-unit">
          <Button variant="outline-light">
            <box-icon name='shopping-bag'></box-icon>
            <Badge text='black' bg='light'>{cart.length}</Badge>
          </Button>

        </div>
      
    </>
  )
}

export default CartWidget


// rafce

