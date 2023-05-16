import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import BarraNav from '../components/navbar/BarraNav'
import ItemView from '../pages/ItemView'
import CategoryView from '../pages/CategoryView'

const Rutas = () => {

    const navbar_items = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/category/1",
            name: "Phones"
        },
        {
            path: "/category/2",
            name: "Tablets"
        }
    ]

    return (
        <BrowserRouter>
            <BarraNav navbar_items={navbar_items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:id' element={<CategoryView />} />
                <Route path='/item/:id' element={<ItemView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas