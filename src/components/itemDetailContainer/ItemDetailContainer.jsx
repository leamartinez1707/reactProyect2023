import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import useFirebase from '../../hooks/useFirebase'
import { useParams } from 'react-router-dom'
import Spinner from '../spinnerLoad/Spinner'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { product, fetchGetProduct, loading } = useFirebase();

  useEffect(() => {
    setTimeout(() => {
      fetchGetProduct({ id })
    }, 1000);
  }, [])

  return (
    <div className='detailContainer'>
      <h1 className='m-2 p-2'>Information about the product</h1>

      {loading && <Spinner />}
      {!loading &&
        <ItemDetail item={product} />
      }

    </div>
  )
}

export default ItemDetailContainer