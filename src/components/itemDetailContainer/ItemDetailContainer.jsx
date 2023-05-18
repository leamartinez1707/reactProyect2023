import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { getProductById } from '../../productsAsync'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(response => {
        setProduct(response)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div className='detailContainer'>
      <h1 className='m-2 p-2'>Information about the product</h1>
      {loading && <Spinner />}
      {!loading &&
        <ItemDetail {...product} />
      }
    </div>
  )
}

export default ItemDetailContainer