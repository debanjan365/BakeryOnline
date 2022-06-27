import { useEffect } from "react";
import { useState } from "react";
import { Container, Table,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Cart = (props) => {
  const { data = {}, totalHanndler, total } = props;
  const [count, setCount] = useState(1);
  const [eachCartTotal, setEachCartTotal] = useState(data.price);
  const [totalItem, setTotal] = useState();

  const handleIncrement = () => { 
    setCount(count + 1);
    setEachCartTotal((count + 1) * data.price);
    setTotal(+total + +data.price);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    setEachCartTotal((count - 1) * data.price);
    setTotal(+total - +data.price);
    
  };


  useEffect(() => {
  
    totalHanndler(eachCartTotal);
   
  }, [eachCartTotal]);

  return (
    <>
      <Container
        style={{
          border: "0.5px solid grey",
          backgroundColor: "#B1D8B7",
          borderRadius: "15px",
          marginTop: "1px",
          padding: "25px 50px",
          width: "60%",
        }}
      >
        <Table class="table" hover variant="success">
          <thead>
            <tr class="table text-center text-secondary">
              <th>ProductName</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody class=" text-center">
            <tr>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "#F9F3EE",
                    border: "0.5px solid grey",
                    borderRadius: "5px",
                  }}
                  onClick={handleDecrement}
                >
                  <FontAwesomeIcon
                    style={{ color: "#B1D8B7" }}
                    icon={faMinusSquare}
                  />
                </button>
                {count}
                <button
                  style={{
                    backgroundColor: "#F9F3EE",
                    border: "0.5px solid grey",
                    borderRadius: "5px",
                  }}
                  onClick={handleIncrement}
                >
                  <FontAwesomeIcon
                    style={{ color: "#B1D8B7" }}
                    icon={faPlusSquare}
                  />
                </button>
              </td>
              <td>{eachCartTotal}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default function CartContainer(props) {
  const [total, setTotal] = useState(0);
  const cartData = localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [];

  const totalHanndler = (total) => {
    const sum = total;
    setTotal(sum);
  };

  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Your Order has been confirmed ! Plesase check your email",
        icon: "success",
        confirmButtonText: "OK",
      });
}
  return (
    <>
      <h1
        style={{
          fontFamily: "fantasy",
          fontSize: "3.5rem",
          color: "brown",
          marginTop: "55px",
        }}
      >
        Thank you! for choosing us.
      </h1>
      {cartData &&
        cartData.length > 0 &&
        cartData.map((data) => {
          return (
            <Cart data={data} totalHanndler={totalHanndler} total={total} />
          );
        })}
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "500",
        }}
      >
        Total Amount : <span style={{ color: "brown" }}>{total}</span>
      </div>
      <hr />
      <div>
        <Button 
         onClick={showAlert}
          style={{
            textDecoration: "none",
            float: "right",
            padding: "15px 25px",
            border: "1px solid grey",
            borderRadius: "5px 45px 5px 45px",
            backgroundColor: "brown",
            color: "white",
          }}
        >
          Proceed to Checkout
        </Button>
      </div>
    </>
  );
}
