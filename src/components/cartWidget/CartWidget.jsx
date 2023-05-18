import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { getProducts } from '../../productsAsync'
import { useState, useEffect } from 'react';

const CartWidget = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [products])
  
  return (

    <div className="bag-unit">
      <Button variant="outline-light">
        <box-icon name='shopping-bag'></box-icon>
        <Badge text='black' bg='light'>{products.length}</Badge>
      </Button>
    </div>
  )
}

export default CartWidget


// rafce

