import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../cartWidget/CartWidget'
import logo from '../../images/logo.png'
import './navbar.css';
import { CartProvider } from '../../context/CartContext';

const BarraNav = (props) => {

  const {cart} = useContext(CartProvider)
  const { navbar_items } = props
  const navigate = useNavigate()

  useEffect(() => {
    
   
  }, [cart])

  return (

    <div className="navbar-div">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate(`/`)} className='nav_img'>
          <img src={logo} alt='Brand logo' width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav">
            {
              navbar_items.map(({ path, name }, index) => (
                <li key={index} className="nav-item">
                  <NavLink className={'nav-link'} to={path}>{name}</NavLink>
                </li>
              ))
            }
          </ul>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
  )
}

export default BarraNav

