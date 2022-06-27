import { Card, Button} from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../context/Context";
import {cloneDeep} from 'lodash';


export function CardComponent(props) {
  const {
    productName = "",
    productDescription = "",
    productPrice = " ",
    productImage = "",
    showButton = true,
    cardBtnText = "Add to cart",
  } = props.cardData;
  const {cartData,setCartData }=useContext(MyContext);

  const handleCardClick = (Title) => {
    if (props.setShow) {
      props.setShow();
    }
    if (props.selected) {
      props.selected(Title);
    }
  };
  const add_to_cart =()=>{
    let clonedCartData=cloneDeep(cartData);
    clonedCartData.push({name:productName,price:productPrice,image:productImage});
    localStorage.setItem('cartData',JSON.stringify(clonedCartData));
    setCartData(clonedCartData);
  }
  return (
    <>
      <Card style={{ height: "auto" }}>
        <Card.Link
          href="#"
          onClick={() => handleCardClick(productName)}
          style={{
            "font-family": "Cursive",
            "text-decoration": "none",
            color: "#A52A2A",
          }}
        >
          {productImage !== "" && (
            <Card.Img
              variant="top"
              src={productImage}
              style={{ height: "264px" }}
            />
          )}
          <Card.Body>
            {productName !== "" && <Card.Title>{productName}</Card.Title>}
            <Card.Text style={{ "font-size": "1rem" }}>
              {productDescription}
            </Card.Text>
            <Card.Text style={{ "font-size": "1.2rem" }}>
            ₹{productPrice}
            </Card.Text>
          </Card.Body>
          {showButton && (
            <Card.Footer>
              <Button
              onClick={add_to_cart}
                style={{
                  "font-size": "1rem",
                  width: "100%",
                  backgroundColor: "red",
                }}
              >
                {cardBtnText}
              </Button>
            </Card.Footer>
          )}
        </Card.Link>
      </Card>
    </>
  );
}


