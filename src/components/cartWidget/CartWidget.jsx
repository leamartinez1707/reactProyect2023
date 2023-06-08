import React, { useContext, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartProvider } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

  const { cart, countProds } = useContext(CartProvider);
  const navigate = useNavigate()

  useEffect(() => {
    
    console.log(countProds)
  }, [countProds])
  

  return (

    <>
      
        <div className="bag-unit">
          <Button onClick={() => navigate(`/cart`)} variant="outline-light">
            <box-icon name='shopping-bag'></box-icon>
            <Badge text='black' bg='light'>{countProds}</Badge>
          </Button>

        </div>
      
    </>
  )
}

export default CartWidget


// rafce

