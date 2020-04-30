import React, {useState} from "react";
import Col from "../components/Col";
import GaragePic from "../images/mygarage.jpg";

import {
    Container,
    Button,
    Row,
    
  } from "reactstrap";


export default function Signup() {
const [username, setUsername] = useState();
const [password, setPassword] = useState();

const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
};

return (
    <div className = "signinDiv" style ={{ background: `url(${GaragePic}) center / cover` }}>
        
       
      <form onSubmit={handleSubmit} method = "post" action = "">
        <Container style={{ minHeight: "100vh"}} className="mt-3 px-5">
          <Row className="form-group">
            <Col id="inputCol" size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Button className="btn btn-success" type="submit">
            Submit
          </Button>
        </Container>
        
      </form>
      
    </div>
  );
};

