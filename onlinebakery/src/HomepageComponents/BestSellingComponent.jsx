import React from "react";
import { Container, Row, } from "react-bootstrap";
import "./css/BestSelling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



export default function BestSelling() {


  
  return (
    <>
    
      <Container>
        <h1>
          Best <span className="headText">Selling</span>
          <FontAwesomeIcon icon={faHeart} />
        </h1>
        <Row>
         
        </Row>

      </Container>
     
    </>
  );
}

