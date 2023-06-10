import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import BarraNav from '../components/navbar/BarraNav'
import ItemView from '../pages/ItemView'
import CategoryView from '../pages/CategoryView'
import CartView from '../pages/CartView'
import CartProvider from '../context/CartContext'
import ErrorView from '../pages/ErrorView'

const Rutas = () => {

    const navbar_items = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/category/phones",
            name: "Phones"
        },
        {
            path: "/category/tablets",
            name: "Tablets"
        }
    ]

    return (

        <div className='page-container'>
        <div className='content-wrap'>
        <BrowserRouter>
        <CartProvider>
            <BarraNav navbar_items={navbar_items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:categoryId' element={<CategoryView />} />
                <Route path='/item/:id' element={<ItemView/>} />
                <Route path='/cart' element={<CartView/>} />
                <Route path='*' element={<ErrorView/>} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
        </div>
        </div>
        
    )
}

export default Rutas