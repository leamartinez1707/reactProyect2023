import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards(props) {

  const { id, title, description, img } = props;
  const navigate = useNavigate()

  return (

    <div class="row">
      <div class="col">
        <div className='cards-products d-flex flex-column mx-2'>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={img} alt='Description image' />
            <Card.Body>
              <Card.Title className='fs-5'>{title}</Card.Title>
              <Card.Text className='fs-6'>
                {description}
              </Card.Text>
              <Button variant="danger" onClick={() => navigate(`/item/${id}`)}>Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cards;