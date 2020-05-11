import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Col from "../components/Col";
import GaragePic from "../assets/images/mygarage.jpg";
import { Container, Button, Row } from "reactstrap";
import API from "../utils/API";

function SignIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(props);
    // console.log("hi login");
    if (username && password) {
      API.getUser({
        username: username,
        password: password,
      })

        // .then((res) => console.log(res))
        .then((res) =>
          history.push({
            pathname: "/vehicle",
            state: { username: username },
          })
        )
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
              <h3>
                <strong>Login Here...</strong>
              </h3>
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
            Login
          </Button>{" "}
          &nbsp; &nbsp; &nbsp;
          <a
            href="/signup"
            style={{ color: "white", fontSize: "20px", fontWeight: "700" }}
          >
            Signup
          </a>
        </Container>
      </form>
    </div>
  );
}

export default SignIn;
