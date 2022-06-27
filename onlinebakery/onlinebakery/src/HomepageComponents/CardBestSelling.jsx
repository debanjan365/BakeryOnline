import {Card, Button } from 'react-bootstrap';
import './css/Gallery.css';


export function CardComponent(props) {
    const {cardWith=""}=props;
    const {
      cardImgSrc = "",
      cardTitle = "",
      cardText = "",
      showButton = false,
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
        <Card className="gallery"style={{ width:cardWith, height: 'auto'}}>
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
             <Button></Button>
            </Card.Footer>}
          </Card.Link>
        </Card>
      </>
    );
  }
  