import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({ 
    
    product: {id, title, img, price, stock, description, count}}) =>{ 

    const navigate = useNavigate()
    return (

        <Card
            className='card-item'>
            <Card.Img variant="top" src={img} alt='Description image' className='w-100 h-100'
            />
            <Card.Body>
                <Card.Title className=''>{title}</Card.Title>
                <Card.Text className=''>
                    {description}
                </Card.Text>
                <Card.Text>
                    {'Price $'}
                    {price}
                </Card.Text>
                <Card.Text>
                    {stock >= 1 ? 'In stock' : 'No stock'}
                </Card.Text>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button className='btn-verMas' variant="danger" onClick={() => navigate(`/item/${id}`)}>Item detail</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item