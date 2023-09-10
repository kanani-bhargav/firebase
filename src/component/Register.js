import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  
  const [inputVal, setInputVal] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };


  return (
    <Container className="text-start custom-container mt-5">
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
        <Button variant="primary" type="submit">sign up</Button>
      </form>
    </Container>
  );
}

export default Register;
