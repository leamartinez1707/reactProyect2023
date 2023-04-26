import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {

  const bagUnits = [
    {title: 't-shirt', description: 'cotton', precio: '$75'},
    {title: 'short', description: 'beach short', precio: '$15'}
];

  return (
  
        <div className="bag-unit">
        <Button variant="outline-light">
        <box-icon name='shopping-bag'></box-icon>
        <Badge text='black' bg='light'>{bagUnits.length}</Badge>
        </Button>  
        </div>  
)}

export default CartWidget


// rafce

