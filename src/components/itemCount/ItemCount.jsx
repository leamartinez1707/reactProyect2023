import React, { useState } from 'react'

const ItemCount = ({ item, addCart }) => {

  // const {cart, addCart} = useContext(CartProvider)

  const { stock } = item
  const [counter, setCounter] = useState(1)


  let product = item && {
    ...item, counter,
  }

  const ifAddCart = () => {
    if (stock < 0 || counter <= 0) {
      setCounter(1)
    } else {
      console.log(product)
      addCart(product);
    }
  }

  const addCounter = () => {
    if (stock - 1 > counter) {
      setCounter(counter + 1)
    }
  }
  const subtractCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className='p-2 d-flex justify-content-center'>
        <button className='btn m-2' onClick={addCounter}>+
        </button>
        <h2 className='fs-6 d-flex justify-content-center align-items-center'>{counter}</h2>
        <button className='btn m-2' onClick={subtractCounter}>-
        </button>
      </div>
      <div>
        <button className='d-flex btn btn-danger' onClick={() =>
          addCart({ item, counter })
        }>
          Agregar al carrito
        </button>
      </div>
    </>
  )
}
export default ItemCount;