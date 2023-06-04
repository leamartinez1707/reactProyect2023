import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {CartProvider} from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

  // const {cart} = useContext(CartProvider)
  
  return (

    <>
    <Link to="/cart">
    <div className="bag-unit">
      <Button variant="outline-light">
        <box-icon name='shopping-bag'></box-icon>
        <span text='black' bg='light'>2</span>
      </Button>
    </div>
    </Link>
    </>
  )
}

export default CartWidget


// rafce

