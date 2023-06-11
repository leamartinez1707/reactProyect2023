import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({ 
    
    product: {id, title, img, price, stock}}) =>{ 

    const navigate = useNavigate()
    return (

        <Card
            className='card-item'>
            <Card.Img variant="top" src={img} alt='Description image'/>
            <Card.Body>
                <Card.Title className=''>{title}</Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Card.Text>
                    {stock >= 1 ? 'In stock' : 'No stock'}
                </Card.Text>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button className='btn-verMas' variant="danger" onClick={() => navigate(`/item/${id}`)}>View detail</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item