import React from "react";

import {Container,Nav,Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCutlery,faShoppingBag,faRightToBracket,faCartShopping} from "@fortawesome/free-solid-svg-icons";


export default function NavbarComponent() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><FontAwesomeIcon icon={faCutlery}/>myBakery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="/shop"><FontAwesomeIcon icon={faShoppingBag}/>Shop</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <hr/>
            <Nav>
              <Nav.Link href="/login"><FontAwesomeIcon icon={faRightToBracket}/>Login</Nav.Link>
              <Nav.Link href="/cart" target="_self"><FontAwesomeIcon icon={faCartShopping}/>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
  );
}
