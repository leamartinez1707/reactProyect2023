import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../productsAsync'

const ItemListContainer = ({ title }) => {

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

    <div className=''>

      <div className="title-h1">
        <h1 className='m-2 p-4 text-danger'>{title}</h1>
      </div>
      
      <div className='itemList-prod'>
        <ItemList products={products} />
        </div>


    </div>
  )
}

export default ItemListContainer;