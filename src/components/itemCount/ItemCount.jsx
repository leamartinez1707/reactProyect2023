import React from 'react'
import { useState } from 'react'

export const ItemCount = () => {

  const [counter, setCounter] = useState(0)

 const addProduct = () => {

    return
  }
  
  if (counter < 0) {
    setCounter(0)
  }

  return (
    <div className='p-2 d-flex justify-content-center'>
      <button className='btn m-2' onClick={() => {
        setCounter(counter + 1)
      }}>+
      </button>
      <h2 className='fs-6 d-flex justify-content-center align-items-center'>{counter}</h2>
      <button className='btn m-2' onClick={() => {
        setCounter(counter - 1)
      }}>-
      </button>
    </div>
  )
}
export default ItemCount;