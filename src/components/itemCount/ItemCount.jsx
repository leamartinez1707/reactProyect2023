import React, { useState } from 'react'
import {CartProvider} from '../../context/CartContext'

const ItemCount = ({item}) => {

  const {cart, addCart} = CartProvider()
  const [counter, setCounter] = useState(1)
  const {stock} = item
    
  if (counter < 0) {
    setCounter(0)
  }

  let product = item && {...item, counter}

  const ifAddCart = () => {
    if(stock < 0 || counter <= 0) return;
    addCart(product)
  }
  const addCounter = () => {
    if(stock - 1 > counter){
      setCounter(counter + 1)
    }
  }
  const subtractCounter = () => {
    if(counter > 1){
      setCounter(counter - 1)
    }
  }

  return (
    <div className='p-2 d-flex justify-content-center'>
      <button className='btn m-2' onClick={addCounter}>+
      </button>
      <h2 className='fs-6 d-flex justify-content-center align-items-center'>{counter}</h2>
      <button className='btn m-2' onClick={subtractCounter}>-
      </button>
    </div>
  )
}
export default ItemCount;