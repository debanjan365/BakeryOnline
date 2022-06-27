import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './css/About.css';
import userM from '../images/teamM.png';
import userF from '../images/teamF.png';



export default function About() {
    return(
        <>
            <div className= "up">
                <h1 className = "head"> About us </h1>
                <p className = "text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum cupiditate dolorum beatae
        optio repellendus rem quod voluptas libero autem laboriosamquas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum cupiditate dolorum beatae
        optio repellendus rem quod voluptas libero autem laboriosamquas.
                </p>
            </div>
            <Container>
                <h1 className="ourTeam"> OurTeam </h1>
                <Row >
                    <Col md-4>
                        <img className="Image" src={userM} alt="" />
                        <h2 className = "name"> Md. Mehmood Alam </h2>
                        <p className="highlight"> Group Leader </p>
                        <p> contact@example.com </p>
                    </Col>
                    <Col md-4>
                        <img className="Image" src={userF} alt="" />
                        <h2 className = "name"> Priyanjali Das </h2>
                        <p className="highlight"> Member </p>
                        <p> contact@example.com </p>
                    </Col>
                    <Col md-4>
                    <img className="Image" src={userM} alt="" />
                        <h2 className = "name"> Debanjan Dhar </h2>
                        <p className="highlight"> Member </p>
                        <p> contact@example.com </p>
                    </Col>
                    <Col md-4>
                    <img className="Image" src={userF} alt="" />
                        <h2 className = "name"> Shafaque Busra </h2>
                        <p className="highlight"> Member </p>
                        <p> contact@example.com </p>
                    </Col>
                    <Col md-4>
                    <img className="Image" src={userM} alt="" />
                        <h2 className = "name"> Srinjoy Gupta </h2>
                        <p className="highlight"> Member </p>
                        <p> contact@example.com </p>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}