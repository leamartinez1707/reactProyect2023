import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { getProductById, getProducts } from '../../productsAsync'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {


  const [product, setProduct] = useState();
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    getProductById(id)
      .then(response => {
        setProduct(response)
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Detalles del producto seleccionado</h1>
      <hr />
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer