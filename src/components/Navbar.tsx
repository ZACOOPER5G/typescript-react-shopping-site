import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
          <Container>
              <Nav className="me-auto" >
                  <Nav.Link to='./' as={NavLink} >Home</Nav.Link>
                  <Nav.Link to='./store' as={NavLink} >Store</Nav.Link>
                  <Nav.Link to='./about' as={NavLink} >About</Nav.Link>
              </Nav>
              <Button className="cart-button">
                  <p className="cart-title">Cart</p>
                  <div className="cart-counter rounded-circle bg-danger d-flex justify-content-center align-items-center">3</div>
              </Button >
          </Container>
      </NavbarBs>
  )
}
