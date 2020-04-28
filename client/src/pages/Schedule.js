import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  CustomInput,
} from "reactstrap";

import classnames from "classnames";
import { vehicleSeed, tabHeadings, services } from "../staticData";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("2");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const chosenServices = [];
  function handleClick(e) {
    console.log(e.target.value);
    if (e.target.value === "next") {
      if (activeTab === "1") setActiveTab("2");
      if (activeTab === "2") setActiveTab("3");
      if (activeTab === "3") setActiveTab("4");
    } else {
      if (activeTab === "2") setActiveTab("1");
      if (activeTab === "3") setActiveTab("2");
      if (activeTab === "4") setActiveTab("3");
    }
  }

  function handleCheckedBoxes(e) {
    if (e.target.checked) chosenServices.push(e.target.id);

    for (let i = 0; i < chosenServices.length; i++) {
      if (e.target.id === chosenServices[i] && e.target.checked === false) {
        chosenServices.splice(i, 1);
      }
    }

    console.log(chosenServices);
  }

  return (
    <div>
      <Nav tabs>
        {tabHeadings.map((tabHeading) => {
          return (
            <NavItem key={tabHeading.key}>
              <NavLink
                className={classnames({ active: activeTab === tabHeading.key })}
                onClick={() => {
                  toggleTab(tabHeading.key);
                }}
              >
                {tabHeading.heading}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="5">
              <Card
                body
                inverse
                style={{ backgroundColor: "teal", borderColor: "#333" }}
              >
                <CardTitle style={{ textAlign: "center" }}>
                  <h5>
                    Please Select a Vehicle to begin scheduling your service
                    appointment
                  </h5>
                </CardTitle>
                <CardText style={{ textAlign: "center" }}>
                  <Label for="exampleSelect">Select your Vehicle</Label>
                  <Input
                    type="select"
                    bsSize="lg"
                    name="select"
                    id="exampleSelect"
                  >
                    {vehicleSeed.map((vehicle) => {
                      return (
                        <option key={vehicle.vinNumber}>
                          {vehicle.make} {vehicle.model}
                        </option>
                      );
                    })}
                  </Input>
                </CardText>
                <br></br>
                <div className="clearfix" style={{ padding: ".5rem" }}>
                  <Button className="btn btn-secondary float-left" disabled>
                    Previous
                  </Button>
                  <Button
                    className="btn btn-danger float-right"
                    value="next"
                    onClick={(e) => handleClick(e)}
                  >
                    Next
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card
                body
                inverse
                style={{ backgroundColor: "teal", borderColor: "#333" }}
              >
                <CardTitle>
                  <h3>Choose the Services</h3>
                </CardTitle>

                {/* <CardText> */}
                <FormGroup>
                  <div style={{ padding: "20px" }}>
                    {services.map((service) => {
                      return (
                        <CustomInput
                          type="checkbox"
                          key={service.key}
                          id={service.service}
                          label={service.service}
                          onClick={(e) => handleCheckedBoxes(e)}
                        />
                      );
                    })}
                  </div>
                </FormGroup>
                <br></br>
                <FormGroup>
                  <Label for="exampleText">
                    <h5>Other Service/Repair Request</h5>
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="4"
                  />
                </FormGroup>
                {/* </CardText> */}
                <hr></hr>
                <div className="clearfix" style={{ padding: ".5rem" }}>
                  <Button
                    className="btn btn-danger float-left"
                    value="prev"
                    onClick={(e) => handleClick(e)}
                  >
                    Previous
                  </Button>
                  <Button
                    className="btn btn-danger float-right"
                    value="next"
                    onClick={(e) => handleClick(e)}
                  >
                    Next
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Schedule;
