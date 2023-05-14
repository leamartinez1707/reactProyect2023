import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({ id, title, img, price, stock, description }) => {

    const navigate = useNavigate()
    return (

        <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-2 m-2">
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
                        {stock >= 1 ? 'Disponible' : 'No disponible'}
                    </Card.Text>
                    <Button variant="danger" onClick={() => navigate(`/item/${id}`)}>Ver más</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Item