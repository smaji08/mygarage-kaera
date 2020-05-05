import React, { useEffect, useState } from "react";
import { TabPane, Card, CardTitle, Row, Col, Input } from "reactstrap";
// import { vehicleSeed } from "../../staticData";
import TabButton from "../TabButton";

//"#C5796D" #8EAA79
const TabId1 = ({ activeTab, setActiveTab, car, setCar, vehicles }) => {
  return (
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <Card
            body
            inverse
            style={{ backgroundColor: "#3a6186", borderColor: "#333" }}
          >
            <CardTitle style={{ textAlign: "center" }}>
              <h4>
                Please Select a Vehicle to begin scheduling your service
                appointment
              </h4>
            </CardTitle>
            <Input
              type="select"
              bsSize="lg"
              name="select"
              id="chooseCar"
              defaultValue=""
              onChange={(e) => setCar(e.target.value)}
            >
              <option value=""></option>
              {vehicles.map((vehicle) => {
                return (
                  <option key={vehicle.vinNumber} value={vehicle.makemodel}>
                    {vehicle.makemodel}
                  </option>
                );
              })}
            </Input>

            <br></br>
            <hr></hr>
            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
};
export default TabId1;
