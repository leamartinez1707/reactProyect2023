import React, {useEffect} from 'react'
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { CartProvider } from '../../context/CartContext';

const CartItem = ({ id, title, img, price, count, deleteItem }) => {

  // const { deleteItem, total } = useContext(CartProvider)


  return (

    <Card
      className='card-item'>
      <Card.Img variant="top" src={img} alt='Description image' className='w-100 h-100'
      />
      <Card.Body>
        <Card.Title className=''>{title}</Card.Title>
        <Card.Text>
          {'Price $'}
          {price}
        </Card.Text>
        <Card.Text>
          {count}
        </Card.Text>

        <div className='d-flex justify-content-center align-items-center'>
          <Button className='btn-verMas' variant="danger" onClick={deleteItem}>Delete item</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem