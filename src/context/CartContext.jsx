import { useContext, useState, createContext } from 'react'
import { existsCart, unifyItems } from '../helpers/helper'

// const CartContext = createContext();

// export const CartProvider = () => useContext(CartContext);
export const CartProvider = createContext("")

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    // const addCart = (product) => {
    //     setCart([...cart, product])
    // }

    const addCart = (item) => {
        setCart([...cart, item])
        alert('Producto agregado al carrito')
    }

    const deleteItem = (id) => {
        let newCart = cart.filter((e) => e.id !== id)
        setCart(newCart)
    }

    const cleanCart = () => {
        setCart([])
    }

    return (

        <CartContext.Provider
            value={{
                cart,
                addCart,
                cleanCart,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext