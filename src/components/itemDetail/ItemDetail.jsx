import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, title, img, categoryId, description, price, stock }) => {

  return (

    <div className='align-items-center d-flex justify-content-center'>

      <Card
        style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} alt='Description image' className='w-100 h-100'
        />
        <Card.Body>
          <Card.Title className='fs-5'>{title}</Card.Title>
          <Card.Text className='fs-6'>
            {description}
          </Card.Text>
          <Card.Text>
            {'Precio $'}
            {price}
          </Card.Text>
          <Card.Text>
            {stock >= 1 ? 'En stock' : 'No disponible'}
          </Card.Text>
        </Card.Body>
      </Card>

    </div>


  )
};

export default ItemDetail