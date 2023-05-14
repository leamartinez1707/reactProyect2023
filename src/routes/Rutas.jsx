import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import BarraNav from '../components/navbar/BarraNav'

const Rutas = () => {

    const navbar_items = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/checkout",
            name: "Checkout"
        },
    ]

    return (
        <BrowserRouter>
            <BarraNav navbar_items={navbar_items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                {/* <Route path='/item/:id' element={<ItemDetail/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas