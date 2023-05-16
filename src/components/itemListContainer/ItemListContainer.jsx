import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts} from '../../productsAsync'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (

    <div>
    
      <h1 className='m-2 p-4 text-danger'>{greeting}</h1>
      <ItemList products={products} />
    </div>

  )
}

export default ItemListContainer;