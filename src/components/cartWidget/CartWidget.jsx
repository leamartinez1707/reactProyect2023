import React, { useContext, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartProvider } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartProvider);
  const total = parseInt(getTotalQuantity(), 10);
  const navigate = useNavigate();

  useEffect(() => {

  }, [total])

  return (
    <div className="bag-body">
      <Button onClick={() => navigate(`/cart`)} variant="outline-light">
        <box-icon name='shopping-bag'></box-icon>
        <Badge text='black' bg='light'>{total}</Badge>
      </Button>
    </div>
  )
}

export default CartWidget