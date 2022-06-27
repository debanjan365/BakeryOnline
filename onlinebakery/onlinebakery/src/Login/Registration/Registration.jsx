import React, { useState } from "react";
import cakes2 from "../../images/logo1.png";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [id, setId] = useState("");
  const [uname, setUname] = useState("");
  const [upwd, setUpwd] = useState("");
  const [uemail, setUemail] = useState("");
  const [uphone, setUphone] = useState("");
  const [Rpwd, setRPwd] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  var f = true;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!uemail || !uname || !upwd || !uphone) {
      f = false;
      return toast.error("Please enter your Name, Email and Password.");
    }

    if (upwd !== Rpwd) {
      f = false;
      return toast.error("Please rewrite the same password again.");
    }

    if (checkbox === false) {
      f = false;
      return toast.error("Please agree to our Terms & Conditions.");
    }

    if (f) {
      const response = await axios.post("http://localhost:9090/save", {
        id: id,
        uname: uname,
        upwd: upwd,
        uemail: uemail,
        uphone: uphone,
      });

      if (response.data === 1) {
        console.log(" Registation Successfull! ");
        setId("");
        setUname("");
        setUpwd("");
        setUemail("");
        setUphone("");
        return toast.success(" Account Registered! ");
      } else {
        console.log(" Email already exists. ");
        return toast.error(" Email already exists. Please login instead. ");
      }
    }
  }
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <Container className="mt-5">
        <Row md="">
          <Col md-6 mt-4 p-2>
            <h1 className="heading text-center"> Sign Up </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="mt-3">What's your name?</Form.Label>
                <Form.Control
                  onChange={(e) => setUname(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  style={{
                    height: "38px",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3">
                  Enter Your Email Address{" "}
                </Form.Label>
                <Form.Control
                  onChange={(e) => setUemail(e.target.value)}
                  type="email"
                  placeholder="Your Email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3">Enter password</Form.Label>
                <Form.Control
                  onChange={(e) => setUpwd(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3">Repeat Your Password</Form.Label>
                <Form.Control
                  onChange={(e) => setRPwd(e.target.value)}
                  type="password"
                  placeholder="Repeat your Password"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3 ">
                  Enter Your Contact No.
                </Form.Label>
                <Form.Control
                  className=""
                  type="text"
                  minLength={10}
                  maxlength="10"
                  onChange={(e) => setUphone(e.target.value)}
                  placeholder="Contact No."
                  style={{
                    height: "38px",
                  }}
                />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Check
                  onClick={(e) => setCheckbox(true)}
                  type="checkbox"
                  label="I agree to the Terms of Service "
                />
              </Form.Group>
              <br></br>
              <Button variant="danger" type="submit">
                {" "}
                Register{" "}
              </Button>
            </Form>
          </Col>
          <Col md="5" className="">
            <div className="picture">
              <img className="pic" src={cakes2} alt=" " />
              <br />
            </div>
            <div className="member">
              <Link
                className="link-login"
                to="/login"
                style={{
                  textDecoration: "none",
                  padding: "20px 55px",
                  backgroundColor: "brown",
                  color: "white",
                  borderRadius: "25px",
                }}
              >
                <span> I am already a Member </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
