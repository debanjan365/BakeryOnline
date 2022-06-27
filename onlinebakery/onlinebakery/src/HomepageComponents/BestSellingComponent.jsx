import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/BestSelling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import productCard from "./js/BestSelling";
import { CardComponent } from "../HomepageComponents/CardBestSelling";

export default function BestSelling() {
  const [setShow] = useState(false);
  const [setSelected] = useState("");
  const handleShow = () => {
    setShow(true);
  };

  const getselectedItemName = (selected) => {
    setSelected(selected);
  };
  return (
    <>
      <Container>
        <h1>
          Best <span className="headText">Selling</span>
          <FontAwesomeIcon icon={faHeart} />
        </h1>
        <Row>
          {productCard.bestSelling.map((item, ind) => {
            return (
              <Col md-4 style={{ padding: "5px" }}>
                <CardComponent
                  cardData={item}
                  key={item.cardTitle + ind}
                  setShow={handleShow}
                  selected={(title) => getselectedItemName(title)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
