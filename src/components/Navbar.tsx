import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
          <Container>
              <Nav className="me-auto" >
                  <Nav.Link to='./' as={NavLink} >Home</Nav.Link>
                  <Nav.Link to='./store' as={NavLink} >Store</Nav.Link>
                  <Nav.Link to='./about' as={NavLink} >About</Nav.Link>
              </Nav>
              <Button 
                className="cart-button" 
                onClick={openCart}
              >
                  <p className="cart-title" >Cart</p>
                  <div className="cart-counter rounded-circle bg-danger d-flex justify-content-center align-items-center">{cartQuantity}</div>
              </Button >
          </Container>
      </NavbarBs>
  )
}
