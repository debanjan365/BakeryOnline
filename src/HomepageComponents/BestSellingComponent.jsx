import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/BestSelling.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import  productCard  from "./js/BestSelling";
import ModalComponent from "./Modal"; 
import { CardComponent } from "./CardComponent";

export default function BestSelling() {
    const [show,setShow]=useState(false);
    const [selected,setSelected]=useState('')
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }
    const getselectedItemName=(selected)=>{
        setSelected(selected);
    }
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
              <Col md-4 style={{padding:'5px'}}>
                <CardComponent cardData={item} key={item.cardTitle + ind} setShow={handleShow} selected={(title)=>getselectedItemName(title)}/>
              </Col>
            );
          })}
        </Row>

        <ModalComponent show={show} handleClose={handleClose} title={selected}>
          <Row>
            {selected && productCard.modalContent[selected] && productCard.modalContent[selected].map((mitem,index)=>{
                return(
                  <Col md-6 style={{padding:'5px'}}>
                    <CardComponent cardData={mitem} key={mitem.cardTitle + index} cardWith="24rem"/>
                  </Col>
                )
            })}
          </Row>

        </ModalComponent>
      </Container>
     
    </>
  );
}

