import React from "react";
import {
  TabPane,
  Card,
  CardTitle,
  Row,
  Col,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
// import { vehicleSeed } from "../../staticData";
import TabButton from "../TabButton";
import moment from "moment";
const TabId4 = ({
  activeTab,
  setActiveTab,
  chosenServices,
  car,
  dateTime,
  otherService,
}) => {
  return (
    <TabPane tabId="4">
      <Row>
        <Col sm="12">
          <Card
            body
            inverse
            style={{ backgroundColor: "#D1B6BA", borderColor: "#333" }}
          >
            <Row>
              <Col sm="7" style={{ padding: "20px" }}>
                <CardTitle style={{ textAlign: "center" }}>
                  <h4>Please Confirm your Selection</h4>
                </CardTitle>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="1234 Main St"
                    />
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="state">State</Label>
                        <Input type="text" name="state" id="state" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input type="text" name="zip" id="zip" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Telephone</Label>
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="(222)222-1234"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="phoneType">Select</Label>
                        <Input type="select" name="phoneType" id="phoneType">
                          <option></option>
                          <option>Home</option>
                          <option>Mobile</option>
                          <option>Work</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=""
                    />
                  </FormGroup>

                  <Button className="btn btn-success float-right">
                    Confirm
                  </Button>
                </Form>
              </Col>
              <Col md={5} style={{ padding: "20px" }}>
                <div style={{ padding: "10px" }}>
                  <h3>The Selected Car for Service</h3>
                  <h4 style={{ color: "blue" }}>{car}</h4>
                </div>
                <div style={{ padding: "10px" }}>
                  <h3>Appointment Date and Time</h3>
                  <h4 style={{ color: "blue" }}>
                    {moment(dateTime).format("LLLL")}
                  </h4>
                </div>
                <div style={{ padding: "10px" }}>
                  <h5>Services Chosen</h5>
                  <ListGroup>
                    {chosenServices.map((chosen, index) => {
                      return (
                        <ListGroupItem key={index} color="warning">
                          {chosen}
                        </ListGroupItem>
                      );
                    })}
                    <ListGroupItem color="success">
                      <p>
                        <strong>Customer Request</strong>
                      </p>
                      {otherService}
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>

            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
};
export default TabId4;
