import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListById from '../components/itemListById/ItemListById'


const CategoryView = () => {

  const {categoryId} = useParams();
  console.log({categoryId})

  return (

    <>
      <h1 className='m-2 p-2'>Filtered by chosen category </h1>
      <ItemListById filter={categoryId}/>
    </>

  )
}

export default CategoryView