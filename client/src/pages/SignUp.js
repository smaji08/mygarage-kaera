import React, { useState } from "react";
import Col from "../components/Col";
import GaragePic from "../assets/images/mygarage.jpg";
import { Container, Button, Row } from "reactstrap";
import API from "../utils/API";

export default function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("hi signup");
    if (username && password) {
      API.saveUser({
        username: username,
        password: password,
      })

        .then((res) => console.log(res.config.data))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div
      className="signinDiv"
      style={{ background: `url(${GaragePic}) center / cover` }}
    >
      <form method="post" onSubmit={handleFormSubmit}>
        <Container style={{ minHeight: "100vh" }} className="mt-3 px-5">
          <Row className="form-group">
            <Col id="inputCol" size="12">
              <div>SignUp Here...</div>
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
            className="btn btn-success"
            type="submit"
            // onClick={handleSubmit}
          >
            SignUp
          </Button>{" "}
          &nbsp; &nbsp; &nbsp;
          <a
            href="/login"
            style={{ color: "white", fontSize: "20px", fontWeight: "700" }}
          >
            Login
          </a>
        </Container>
      </form>
    </div>
  );
}
