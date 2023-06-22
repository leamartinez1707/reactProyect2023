import React, { useContext } from 'react'
import { CartProvider } from '../../context/CartContext';
import { BsCartPlusFill } from 'react-icons/bs';

const ItemCount = ({ item }) => {

  // const {cart, addCart} = useContext(CartProvider)

  const { stock, count } = item
  const { addCart, counter, setCounter } = useContext(CartProvider);

  const ifAddCart = () => {

    addCart({ ...item, count: count + counter - 1, stock: stock - counter });
    setCounter(1)
  }

  const addCounter = () => {
    if (stock - 1 >= counter) {
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
      <div className='p-2 d-flex justify-content-center align-items-center'>
        <button className='btn m-2' onClick={addCounter}>+
        </button>
        <h2 className='fs-6 d-flex justify-content-center align-items-center'>{counter}</h2>
        <button className='btn m-2' onClick={subtractCounter}>-
        </button>
      </div>
      <div className='d-flex btn btn-danger justify-content-center align-items-center' onClick={() =>
        ifAddCart(item)
      }>
        <button className='d-flex btn btn-danger justify-content-center align-items-center' >
          <BsCartPlusFill />
        </button>
      </div>
    </>
  )
}
export default ItemCount;