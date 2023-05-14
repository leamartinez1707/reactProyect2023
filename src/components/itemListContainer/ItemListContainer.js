import React from 'react'


const ItemListContainer = ({ greeting }) => {

  return (

    <div>
      <h1 className='m-2 p-4 text-danger'>{greeting}</h1>
    </div>

  )
}

export default ItemListContainer;