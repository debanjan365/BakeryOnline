import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Review.css";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  return (
    <>
      <Container>
        <h1>
          {" "}
          our <span className="headText"> Customer Reviews</span>{" "}
        </h1>
        <Row>
          <Col md-4>
            <div className="rev">
              <img src={pic1} alt="" />
              <h2>John Deo</h2>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
          </Col>
          <Col md-4>
            <div className="rev">
              <img src={pic2} alt="" />
              <h2>John Deo</h2>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
          </Col>
          <Col md-4>
            <div className="rev">
              <img src={pic3} alt="" />
              <h2>John Deo</h2>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
