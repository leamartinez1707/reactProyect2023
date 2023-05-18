import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../productsAsync'
import Spinner from '../spinnerLoad/Spinner'

const ItemListContainer = ({ title }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then(response => {
        setProducts(response)
        setLoading(false)
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
      
      {loading && <Spinner />}
            {!loading &&
      <div className='itemList-prod'>
        <ItemList products={products} />
        </div>
        }
    </div>
  )
}

export default ItemListContainer;