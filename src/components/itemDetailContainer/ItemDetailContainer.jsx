import React, { useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import useFirebase from '../../hooks/useFirebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams();
  const {product, fetchGetProduct} = useFirebase();

  useEffect(() => {
    fetchGetProduct({id})
  },[])

  return (
    <div className='detailContainer'>
      <h1 className='m-2 p-2'>Information about the product</h1>
      
        {<ItemDetail item={product} />}
    </div>
  )
}

export default ItemDetailContainer