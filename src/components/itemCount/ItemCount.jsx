import React from 'react'
import { useState } from 'react'

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    if(counter < 0){
        //  alert('La cantidad no puede ser menor a 0 unidades.')
         setCounter(0)
        }

  return (
    <div className='p-2 d-flex justify-content-center'>
        <button className='m-2' onClick={() => {
        setCounter(counter + 1)
    }}>+
    </button>
        <h4>{counter}</h4>
        <button className='m-2' onClick={() => {
        setCounter(counter - 1)
    }}>-
    </button>
    
    </div>
  )
}
