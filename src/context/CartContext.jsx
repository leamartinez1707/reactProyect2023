import { useState, createContext } from 'react'
import Swal from 'sweetalert2';

// const CartContext = createContext();

// export const CartProvider = () => useContext(CartContext);
export const CartProvider = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProds, setCountProds] = useState(0);
    const [counter, setCounter] = useState(1)

    const addCart = (prod) => {
        if (cart.find(item => item.id === prod.id)) {

            const products = cart.map(item =>
                item.id === prod.id ?
                    { ...item, count: item.count + counter } : item);
            Swal.fire({
                title: "Added successfully",
                text: 'You added a product already in cart, it was successfully modified.',
                icon: "success"
            })
            return setCart([...products]);

        }
        setCart([...cart, prod])
        Swal.fire({
            title: "Added successfully",
            text: 'Your product was successfully added in cart.',
            icon: "success"
        })
    }

    const deleteItem = (id) => {
        setCart((prev) =>
            prev.filter((item) => item.id !== id)
        )
    }
    const getTotalQuantity = () => {
        return cart.reduce((prev, item) => {
            return prev + item.count;
        }, 0);
    };

    const cleanCart = () => {
        setCart([])
    }

    const getTotalPrice = () => {
        let totalPrice = cart.reduce((acc, element) => {
            return acc + element.count * element.price;
        }, 0);

        return totalPrice;
    };

    return (

        <CartProvider.Provider
            value={{
                cart,
                addCart,
                deleteItem,
                cleanCart,
                total,
                setTotal,
                countProds,
                setCountProds,
                counter,
                setCounter,
                getTotalPrice,
                getTotalQuantity,
            }}
        >
            {children}
        </CartProvider.Provider>
    )
}

export default CartContext;