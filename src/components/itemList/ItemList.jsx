import React from 'react'
import Item from '../item/Item'
import { Container, Row } from 'react-bootstrap'

const ItemList = ({ products }) => {

    return (

        <Container fluid="xl">
            <Row className='d-flex justify-content-center'>
                {products && products.map((pdts) =>
                (
                    <Item
                        key={pdts.id}
                        product={pdts}
                    />
                ))}
            </Row>

        </Container>
    )
}

export default ItemList