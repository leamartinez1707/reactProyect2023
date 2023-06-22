import React from 'react'
import Item from '../item/Item'

const ItemList = ({ products }) => {

    return (

        <div className='row main-itemList d-flex'>
            {products && products.map((pdts) =>
            (
                <Item
                    key={pdts.id}
                    product={pdts}
                />
            ))}
        </div>
    )
}

export default ItemList