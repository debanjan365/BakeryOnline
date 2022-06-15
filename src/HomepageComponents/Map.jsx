import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./css/Map.css";
 const AddressMap=()=>{
    return (
        <>
        <Container>
        <h1>
          Visit <span className="headText">Us</span>
        </h1>
        <Row>
        <div className="google-map-code">
          <iframe className="d-content w-100" src="https://maps.google.com/maps?q=sector%205,kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen aria-hidden="false" tabindex="0"></iframe>
        </div>
        </Row>
        </Container>
    </>
    );
 }
 export default AddressMap;