import React from "react";

import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Login() {
    
    return(
        <>
            <Container className="mt-5">
                <Row>
                    <Col md-6 >
                        <img className = "pic"  alt=" " />
                        <br></br>
                        
                        <a href = "/Registration" className="reset "> Create an Account </a>
                    </Col>

                    <Col md-6 mt-4 p-2>
                        <img className="icon-img"  alt="icon" />
                        <h2 className="heading"> Sign In </h2>
                        <div className="form">
                            <form>
                            <div className="input-container">
                                <input type="text" placeholder="UserName"/><br></br>
                            </div>
                            <div className="input-container">
                                <input type="email" placeholder="Your Email"/><br></br>
                            </div>
                            
                            <div className="button-container">
                            <input className='button' type="submit" />
                            </div>
                            </form>
                        </div>

                        <div>
                            <br></br>
                            Or login with  
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}