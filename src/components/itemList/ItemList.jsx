import React from 'react'
import Item from '../item/Item'

const ItemList = ({ products }) => {

    return (

            <div className='align-items-center d-flex justify-content-center'>
            {products.map(pdts => <Item key={pdts.id} {... pdts} /> )}
            </div>
    )}

export default ItemList