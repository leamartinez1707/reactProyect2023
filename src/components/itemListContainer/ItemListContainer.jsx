import React, { useEffect } from 'react'
import ItemList from '../itemList/ItemList'
import Spinner from '../spinnerLoad/Spinner'
import useFirebase from '../../hooks/useFirebase'

const ItemListContainer = ({ title }) => {

  const { products, fetchGetProducts, loading } = useFirebase()

  useEffect(() => {
    setTimeout(() => {
      fetchGetProducts();
    }, 1000);
  }, []);

  return (

    <>
      <div className="title-h1">
        <h1 className='m-2 p-4 text-danger'>{title}</h1>
      </div>
      {loading && <Spinner />}
      {!loading &&
        <ItemList products={products} />
      }
    </>
  )
}

export default ItemListContainer;