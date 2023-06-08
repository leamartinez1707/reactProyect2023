import React from 'react'
import useFirebase from '../../hooks/useFirebase'
import { useEffect } from 'react'
import ItemList from '../itemList/ItemList'
import Spinner from '../spinnerLoad/Spinner'

const ItemListById = ({ filter }) => {

    const { products, fetchGetProducts, loading } = useFirebase();

    useEffect(() => {

        setTimeout(() => {
            fetchGetProducts();
        }, 0);

    }, [filter])

    const filtered = filter
        ? products.filter((e) => e.categoryId === filter)
        : products;

    return (

        <div className='itemList-prod'>
            {loading && <Spinner />}
            {!loading &&
                <ItemList products={filtered} />
            }
        </div>
    );
};

export default ItemListById