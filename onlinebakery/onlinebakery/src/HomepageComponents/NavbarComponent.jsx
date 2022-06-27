import React, { useState } from "react";
import { Modal, Button, Container, Nav, Navbar } from "react-bootstrap";
import "./css/BestSelling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faShoppingBag,
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faMapMarker,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function NavbarComponent(props) {
  const cartData = localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [];
  const [show, popup] = useState(false);
  const modalopen = () => popup(true);
  const modalClose = () => popup(false);
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faCutlery} />
            myBakery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/shop">
                <FontAwesomeIcon icon={faShoppingBag} />
                Shop
              </Nav.Link>
              <Nav.Link onClick={modalopen}> Contact </Nav.Link>

              <Modal size="lg" show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reach Us:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h1>
                    We'd <FontAwesomeIcon icon={faHeart} /> To Help.{" "}
                  </h1>
                  <p> We serve to please. Feel free to say Hello. </p>
                  <hr></hr>
                  <p>
                    <h4 className="headText">
                      {" "}
                      <FontAwesomeIcon icon={faMapMarker} /> Address:{" "}
                    </h4>
                    <span>
                      Sector V Bidhannagar, Kolkata
                      <br></br>
                      West Bengal
                    </span>
                  </p>
                  <p>
                    <h4 className="headText">
                      {" "}
                      <FontAwesomeIcon icon={faPhoneAlt} /> Let's Talk:{" "}
                    </h4>
                    <span> +91 9879456326 </span>
                  </p>
                  <p>
                    <h4 className="headText">
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} /> E-mail Id:{" "}
                    </h4>
                    <span> contact@example.com </span>
                  </p>
                  <hr></hr>
                  <span className="icons">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </span>
                  <span className="icons">
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />{" "}
                  </span>
                  <span className="icons">
                    {" "}
                    <FontAwesomeIcon icon={faGoogle} />{" "}
                  </span>
                  <span className="icons">
                    {" "}
                    <FontAwesomeIcon icon={faYoutube} />{" "}
                  </span>
                  <span className="icons">
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                  </span>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={modalClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Nav>
            <hr />
            <Nav>
              <Link className="nav-link" to="/login">
                {props.status ? "Logout" : "Login"}
                <FontAwesomeIcon icon={faRightToBracket} />
              </Link>
              <Nav.Link href="/cart" target="_self">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cartData.length}</span>
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
