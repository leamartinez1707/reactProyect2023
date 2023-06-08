import React, { useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import useFirebase from '../../hooks/useFirebase'
import { useParams } from 'react-router-dom'
import Spinner from '../spinnerLoad/Spinner'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { product, fetchGetProduct, loading } = useFirebase();

  useEffect(() => {
    fetchGetProduct({ id })
  }, [])
  
  

  return (
    <div className='detailContainer'>
      <div className="title-h1">
        <h1 className='m-2 p-4 text-danger'>Information about the product</h1>
      </div>

      {loading && <Spinner />}
      {!loading &&
        <ItemDetail item={product} />
      }

    </div>
  )
}

export default ItemDetailContainer