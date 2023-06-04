import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ item }) => {

  return (

    <div className='item-detail'>

      <Card className='m-4 p-2'
        style={{ width: '14rem' }}>
        <Card.Img variant="top" src={item.img} alt='Description image' className='w-100 h-100'
        />
        <Card.Body>
          <Card.Title className='fs-5'>{item.title}</Card.Title>
          <Card.Text className='fs-6'>
            {item.description}
          </Card.Text>
          <Card.Text>
            {'Price $'}
            {item.price}
          </Card.Text>
          <Card.Text>
            {item.stock >= 1 ? 'In stock' : 'No stock'}
          </Card.Text>
          <Card.Text>
            {'Avaible: '}
            {item.stock}
          </Card.Text>
          <div>
            <ItemCount item={item} />
          </div>

        </Card.Body>
      </Card>
    </div>
  )
};

export default ItemDetail