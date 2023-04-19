import React from 'react'
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {

    return(

        <nav className="navbar">

            <h1>eleM</h1>
            <button>Remeras</button>   
            <button>Buzos</button>
            <button>Pantalones</button>
            <CartWidget/>

        </nav>
    )
}

export default NavBar;