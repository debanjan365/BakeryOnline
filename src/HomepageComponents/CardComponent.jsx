import {Card, Button } from 'react-bootstrap';



export function CardComponent(props) {
    const {cardWith=""}=props;
    const {
      cardImgSrc = "",
      cardTitle = "",
      cardText = "",
      showButton = false,
      cardBtnText = ""
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
        <Card style={{ width:cardWith, height: 'auto'}}>
          <Card.Link
            href="#"
            onClick={()=>handleCardClick(cardTitle)}
            style={{ "text-decoration": "none", color: "#181a1e" }}
          >
            {cardImgSrc !== "" && <Card.Img variant="top" src={cardImgSrc} style={{ height:'264px'}} />}
            <Card.Body>
              {cardTitle !== "" && <Card.Title>{cardTitle}</Card.Title>}
              <Card.Text style={{ "font-size": "1.2rem" }}>{cardText}</Card.Text>
            </Card.Body>
            {showButton &&<Card.Footer>
               <Button>{cardBtnText}</Button>
            </Card.Footer>}
          </Card.Link>
        </Card>
      </>
    );
  }
  