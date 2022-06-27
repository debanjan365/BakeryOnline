import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/HowItWorks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faTruckFast,
  faCreditCard,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

export default function Howitworks() {
  return (
    <>
      <hr></hr>
      <Container>
        <h1>
          How it <span className="headText"> Works </span>
        </h1>
        <Row>
          <Col md-3>
            <FontAwesomeIcon className="Bread" icon={faBreadSlice} size="6x" />
            <h3>Choose your favorite food</h3>
          </Col>
          <Col md-3>
            <FontAwesomeIcon className="CardSwipe" icon={faCreditCard} size="6x" />
            <h3>Easy payments methods</h3>
          </Col>
          <Col md-3>
            <FontAwesomeIcon className="Smile" icon={faFaceSmile} size="6x" />
            <h3>and finally, Enjoy your food</h3>
          </Col>
          <Col md-3>
            <FontAwesomeIcon className="Car" icon={faTruckFast} size="6x" />
            <h3>Free and fast delivery</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
