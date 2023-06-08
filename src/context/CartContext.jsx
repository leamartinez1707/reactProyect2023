import { useContext, useState, createContext } from 'react'
import { existsCart, unifyItems } from '../helpers/helper'

// const CartContext = createContext();

// export const CartProvider = () => useContext(CartContext);
export const CartProvider = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProds, setCountProds] = useState(0);

    const addCart = (prod) => {
        if (cart.find(item => item.id === prod.id)) {

            const products = cart.map(item =>
                item.id === prod.id ?
                    { ...item, count: item.count + 1 } : item);
            alert('Ya existia')
            setTotal(total + prod.price * prod.count)
            setCountProds(countProds + prod.count)
            return setCart([...products]);

        }
        setTotal(total + prod.price * prod.count)
        setCountProds(countProds + prod.count)
        setCart([...cart, prod])
        alert('No existia')
    }

    const deleteItem = (item) => {
        const result = cart.filter(
            prod => prod.id !== item.id)
        console.log(result);
        setTotal(total - item.price * item.count)
        setCountProds(countProds - item.count)
        setCart(result)
    }

    const cleanCart = () => {
        setCart([])
    }

    return (

        <CartProvider.Provider
            value={{
                cart,
                addCart,
                deleteItem,
                total,
                setTotal,
                countProds,
                setCountProds
            }}
        >
            {children}
        </CartProvider.Provider>
    )
}

export default CartContext;