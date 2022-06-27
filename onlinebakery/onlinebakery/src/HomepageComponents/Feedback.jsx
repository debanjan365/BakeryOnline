import "./css/Feedback.css";
import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

function Feedback() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [food, setFood] = useState("");
  const [like, setLike] = useState("");
  const [rating,setRating] = useState("");
  const [improve, setImprove] = useState("");
  function saveData() {
    let data = { name, city, food, like, rating, improve };
    // console.warn(data);
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.warn("resp",resp);;
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  return (
    <Container className="form">
      <h1>
        FeedBack
        <FontAwesomeIcon icon={faHeart} />
      </h1>

      <Form className="app" onSubmit={saveData}>
        <Form.Group className="input-container">
          <Form.Label>What's your name?</Form.Label>
          <Form.Control
            className="input-feed"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label>What's your city?</Form.Label>
          <Form.Control
            className="input-feed"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            name="city"
            required
          />
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label>What's your Favourite Food?</Form.Label>
          <Form.Control
            className="input-feed"
            type="text"
            placeholder="Favourite Food"
            value={food}
            onChange={(e) => {
              setFood(e.target.value);
            }}
            name="food"
            required
          />
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label>What's you loved the most from us?</Form.Label>
          <Form.Control
            className="input-feed"
            type="text"
            placeholder="ex:Service"
            onChange={(e) => {
              setLike(e.target.value);
            }}
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label>Rate us out of 10?</Form.Label>
          <Form.Control
            className="input-feed text-center"
            type="number"
            max="10"
            min="1"
            placeholder="ex:6"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            name="rating"
            required
          />
        </Form.Group>

        <Form.Group className="input-container">
          <Form.Label>Tell us how can we improve?</Form.Label>
          <Form.Control
            className="input-feed"
            type="text"
            placeholder="Improvement"
            value={improve}
            onChange={(e) => {
              setImprove(e.target.value);
            }}
            name="improve"
            required
          />
        </Form.Group>

        <Button className="button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Feedback;
