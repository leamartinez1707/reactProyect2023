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
                // {...pdts}

                ))}
            {/* {products.lenght < 1 &&
            <h1>
                Products not found..
            </h1>
            } */}
        </div>
    )
}

export default ItemList