import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.png'

const BarraNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Brand logo' width="50" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-categories">
            <Nav.Link className='categories'href="#home">Home</Nav.Link>
            <Nav.Link className='categories'href="#link">Shop</Nav.Link>
            <Nav.Link className='categories'href="#link">About us</Nav.Link>    
            <Nav.Link className='categories text-danger'href="#link">Sale</Nav.Link>        
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BarraNav