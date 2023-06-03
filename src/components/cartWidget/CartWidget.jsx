import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {CartProvider} from '../../context/CartContext'

const CartWidget = () => {

 const { cart } = CartProvider();

//  console.log(cart.lenght)

  // useEffect(() => {
  //   fetchGetProducts()
  //     .then(response => {
  //       setProducts(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [products])
  
  return (

    <>
    <div className="bag-unit">
      <Button variant="outline-light">
        <box-icon name='shopping-bag'></box-icon>
        <Badge text='black' bg='light'>3</Badge>
      </Button>
    </div>
    </>
  )
}

export default CartWidget


// rafce

