import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListById from '../components/itemListById/ItemListById'


const CategoryView = () => {

  const { categoryId } = useParams();

  return (

    <>
      <h1 className='my-4 p-2'>{categoryId.toUpperCase()}</h1>
      <ItemListById filter={categoryId} />
    </>

  )
}

export default CategoryView