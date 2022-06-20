import {Card, Button } from 'react-bootstrap';



export function CardComponent(props) {
    const {
      productName = "",
      productDescription = "",
      productPrice = " ",
      productImage="",
      showButton = true,
      cardBtnText = "Add to cart"
    } = props.cardData;
  
    const handleCardClick=(Title)=>{
      if(props.setShow){
          props.setShow();
      }
      if(props.selected){
        props.selected(Title);
      }
    }
    
    return (
      <>
        <Card style={{ height: 'auto',marginTop:'10%'}}>
          <Card.Link
            href="#"
            onClick={()=>handleCardClick(productName)}
            style={{ "font-family": "Cursive","text-decoration":"none", color: "#A52A2A" }}
          >
            {productImage !== "" && <Card.Img variant="top" src={productImage} style={{ height:'264px'}} />}
            <Card.Body>
              {productName !== "" && <Card.Title>{productName}</Card.Title>}
              <Card.Text style={{ "font-size": "1rem" }}>{productDescription}</Card.Text>
              <Card.Text style={{ "font-size": "1.2rem" }}>{productPrice}</Card.Text>
            </Card.Body>
            {showButton &&<Card.Footer>
               <Button 
                style={{ "font-size": "1rem" ,width:"100%",backgroundColor:"#927159"}}>{cardBtnText}
                </Button>
            </Card.Footer>}
          </Card.Link>
        </Card>
       
      </>
    );
  }
  