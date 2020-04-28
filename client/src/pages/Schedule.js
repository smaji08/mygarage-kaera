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
} from "reactstrap";
import { Label, Input } from "reactstrap";

import classnames from "classnames";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  const vehicleSeed = [
    {
      vinNumber: "19VDE2E51DE001358",
      make: "Acura",
      model: "ILX",
      year: 2013,
      date: new Date(Date.now()),
    },
    {
      vinNumber: "2FMHK6DT7EBD0095",
      make: "Ford",
      model: "Flex",
      year: 2014,
      date: new Date(Date.now()),
    },
    {
      vinNumber: "19VDG2E51DE001358",
      make: "Subaru",
      model: "Forester",
      year: 2015,
      date: new Date(Date.now()),
    },
  ];

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggleTab("1");
            }}
          >
            Select Vehicle
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggleTab("2");
            }}
          >
            Select Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggleTab("3");
            }}
          >
            Select Time
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggleTab("4");
            }}
          >
            Confirm
          </NavLink>
        </NavItem>
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
                  <Input type="select" name="select" id="exampleSelect">
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
                <Row>
                  <Col sm="3">
                    <Button style={{ textAlign: "left" }}> Previous</Button>
                  </Col>
                  <Col sm="7"></Col>
                  <Col sm="2">
                    <Button style={{ textAlign: "right" }}> Next </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Schedule;
