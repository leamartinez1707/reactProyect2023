import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ item, addCart }) => {

  return (

    <div className='item-detail'>

      <Card className='m-4 p-2 card-detail'>
        <Card.Img variant="center" src={item.img} alt='Description image' className='w-100 h-100'
        />
        <Card.Body>
          <Card.Title className='fs-5'>{item.title}</Card.Title>
          <Card.Text className='fs-6'>
            {item.description}
          </Card.Text>
          <Card.Text className='fs-6'>
            {'Price $'}
            {item.price}
          </Card.Text>
          <Card.Text className='fs-6'>
            {item.stock >= 1 ? 'In stock' : 'No stock'}
          </Card.Text>
          <Card.Text className='fs-6'>
            {'Available: '}
            {item.stock}
          </Card.Text>
          <div className=''>
            <ItemCount item={item} addCart={addCart} />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

export default ItemDetail