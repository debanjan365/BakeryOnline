import React, {useState,useEffect} from "react";
import cakes2 from '../images/cakes2.png';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faGoogle} from "@fortawesome/free-brands-svg-icons";
import "../Login/login.css";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const [upwd, setUpwd] = useState("");
    const [uemail, setUemail] = useState("");
    const nav=useNavigate();
async function handleSubmit(event){
    event.preventDefault();
    const response = await axios.post("http://localhost:9090/save",
        {
        upwd: upwd,
        uemail: uemail,
        })
        console.log(response);

        if(response.data === 0)
        {
            nav("/",{
                state:true
            });
           
    //       return toast.success(" Login Successful! ");
           
        }
        else
        {
           nav("/Signup");
       // return toast.error(" You are not registered with us. ");
        }
}
    
    return(
        <>
        <ToastContainer position="top-center" limit ={1} />
             <Container className="mt-5">
                <Row>
                    <Col md-6 >
                        <img className = "pic" src={cakes2} alt=" " />
                        <br></br>
                        <div >
                        <Link className="acc " to= "/Signup" > Create an Account </Link>
                        </div>
                    </Col>

                    <Col md-6 mt-4 p-2>
                    
                    
                    <h1 className="heading"> Sign In </h1>
                        
                   
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="">
                                <Form.Label className="mt-3">Enter Username</Form.Label>
                                <Form.Control onChange = {(e) => setUemail(e.target.value)} name="email" type = "email"  placeholder= "e.g abcd@gmail.com" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="mt-3">Enter Password</Form.Label>
                                <Form.Control onChange = {(e) => setUpwd(e.target.value)} name= "password" type = "password"  placeholder= "Password" />
                            </Form.Group>
                         
     <Button id="logbtn" className="mt-4" variant="danger" type="submit">  Login </Button>
   
                      
                        </Form>
                        <div>
                            <br></br>
                            Or login with  
                            <span className="icons"> <FontAwesomeIcon icon = {faFacebook} /> </span>
                            <span className="icons"> <FontAwesomeIcon icon = {faTwitter} /> </span>
                            <span className="icons"> <FontAwesomeIcon icon = {faGoogle} /> </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}