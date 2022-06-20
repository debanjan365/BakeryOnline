import React from "react";

import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../HomepageComponents/css/login.css";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [id, setId] = useState("");
   const [uname, setUname] = useState("");
   const [upwd, setUpwd] = useState("");
   const [uemail, setUemail] = useState("");
   const [uphone, setUphone] = useState("");
    async function handleSubmit(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:9090/save",
            {
            id: id,
            uname: uname,
            upwd: upwd,
            uemail: uemail,
            uphone: uphone,
            })
            .then(()=>{
                alert("User Registation Successfully");
                setId("");
                setUname("");
                setUpwd("");
                setUemail("");
                setUphone("");
            })
            .catch(()=>{
                alert("Axios failed")
            })
        }
        catch(err){
            alert("Registration Failed")
        }
    }
    
    return(
        <>
            <Container className="mt-5">
                <Row>
                    <Col md-6 mt-4 p-2>
                        <h2 className="heading"> Sign Up </h2>
                        <div className="form">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name"  onChange={(event) =>
              {
                  setUname(event.target.value);      
              }}/>
                        </div>
                        <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email"  onChange={(event) =>
              {
                  setUemail(event.target.value);      
              }}/>
                        </div>
                        <div class="form-group">
                        <input type="password" name="password" placeholder="Password"  onChange={(event) =>
              {
                  setUpwd(event.target.value);      
              }}/>
                        </div>
                        <div class="form-group">
                        <input type="password" name="repassword" placeholder="Repeat Your Password"/>
                        </div>
                        <div class="form-group">
                        <input type="text" name="name" placeholder="Contact No"  onChange={(event) =>
              {
                  setUphone(event.target.value);      
              }}/>
                        </div>

                        <button type="submit">Register</button>

                        </form>
                        </div>
                    </Col>
                    <Col md-6 >
                        <img className = "pic"  alt=" " />
                        <br></br>
                        
                        <a href = "/login"><small className="reset mt-4"> I am already a Member </small></a>
                    </Col>
                   
                </Row>
            </Container>
        </>
    )
}