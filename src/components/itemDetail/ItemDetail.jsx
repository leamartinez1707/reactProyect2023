import React from 'react'
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../itemCount/ItemCount';

const ItemDetail = ({title, img, description, price, stock }) => {

  return (

    <div className='item-detail'>

      <Card
        style={{ width: '16rem' }}>
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
          <ItemCount/>
          <button variant="danger" className='btn bg-danger text-white'>Agregar al carrito</button>
        </Card.Body>
      </Card>
    </div>
  )};

export default ItemDetail