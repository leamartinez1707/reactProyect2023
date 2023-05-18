import React from 'react'
import ItemListById from '../components/itemListById/ItemListById'

const CategoryView = () => {
  return (

    <>
      <h1 className='m-2 p-2'>Filtered by chosen category </h1>
      <ItemListById/>
    </>

  )
}

export default CategoryView