import React, { useState } from "react";
import Col from "../components/Col";
import GaragePic from "../assets/images/mygarage.jpg";
import { Container, Button, Row } from "reactstrap";
import API from "../utils/API";
import "./style.css";
export default function SignIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("hi login");
    if (username && password) {
      API.getUser({
        username: username,
        password: password,
      })

        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div
      className="signinDiv "
      style={{ background: `url(${GaragePic}) center / cover` }}
    >
      <form method="post" onSubmit={handleFormSubmit}>
        <Container style={{ minHeight: "100vh" }} className="mt-3 px-5">
          <Row className="form-group">
            <Col id="inputCol" size="12">
              <div>Login Here...</div>
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Button
            id = "logIn-btn"
            className="btn btn-danger"
            type="submit"
            // onClick={handleSubmit}
          >
            <a href ="/vehicle">
            Login
            </a>
          </Button>{" "}
          &nbsp; &nbsp; &nbsp;
          <Button
             className = "btn btn-success"
             type = "submit"
          >
            <a
              href="/signup"
              // style={{ color: "white", fontSize: "20px", fontWeight: "700" }}
            >
              Signup
            </a>
          </Button>
        </Container>
      </form>
    </div>
  );
}

