import React from 'react'
import { getProductsByCategory } from '../../productsAsync'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../itemList/ItemList'
import Spinner from '../spinnerLoad/Spinner'

const ItemListById = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getProductsByCategory(id)
            .then(response => {
                setProducts(response)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return (

        <div className='itemList-prod'>
            {loading && <Spinner />}
            {!loading &&
                <ItemList products={products} />
            }
        </div>
    );
};

export default ItemListById