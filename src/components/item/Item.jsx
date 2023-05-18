import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({ id, title, img, price, stock, description }) => {

    const navigate = useNavigate()
    return (

            <Card
                style={{ width: '12rem' }}>
                <Card.Img variant="top" src={img} alt='Description image' className='w-100 h-75'
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
                        {stock >= 1 ? 'En stock' : 'Sin stock'}
                    </Card.Text>
                    <Button variant="danger" onClick={() => navigate(`/item/${id}`)}>Ver más</Button>
                </Card.Body>
            </Card>
    )}

export default Item