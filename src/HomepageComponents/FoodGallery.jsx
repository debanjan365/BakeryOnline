import React,{ useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import foodCard from "./js/FoodGallery";
import { CardComponent } from "./CardComponent";
export default function FoodGallery(){
    const [show,setShow]=useState(false);
    const [selected,setSelected]=useState('')
    const getselectedItemName=(selected)=>{
        setSelected(selected);
    }
    const handleClose=()=>{
        setShow(false);
    }
    const handleShow=()=>{
        setShow(true);
    }
    return(
    <>

  <Container>
  <h1>
          Food <span className="headText">Gallery</span>
  </h1>
  <Row>
          {foodCard.gallery.map((item, ind) => {
            return (
              <Col lg="4" style={{padding:'5px'}}>
                <CardComponent cardData={item} key={item.cardTitle + ind} setShow={handleShow} selected={(title)=>getselectedItemName(title)}/>
              </Col>
             
            );
          })}
        </Row>

 </Container>
  </>
  );
}