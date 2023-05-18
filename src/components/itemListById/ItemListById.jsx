import React from 'react'
import { getProductsByCategory } from '../../productsAsync'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../itemList/ItemList'

const ItemListById = () => {

    const [products, setProducts] = useState([])
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getProductsByCategory(id)
            .then(response => {
                setProducts(response)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return (

        <div className='itemList-category'>
                <ItemList products={products} />
        </div>
    )
}

export default ItemListById