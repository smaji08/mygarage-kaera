import React from "react";
import { TabPane, Card, CardTitle, Row, Col, Input } from "reactstrap";
import { vehicleSeed } from "../../staticData";
import TabButton from "../TabButton";
const TabId1 = ({ activeTab, setActiveTab }) => {
  return (
    <TabPane tabId="1">
      <Row>
        <Col sm="5">
          <Card
            body
            inverse
            style={{ backgroundColor: "teal", borderColor: "#333" }}
          >
            <CardTitle style={{ textAlign: "center" }}>
              <h4>
                Please Select a Vehicle to begin scheduling your service
                appointment
              </h4>
            </CardTitle>
            <Input type="select" bsSize="lg" name="select" id="chooseCar">
              {vehicleSeed.map((vehicle) => {
                return (
                  <option key={vehicle.vinNumber}>
                    {vehicle.make} {vehicle.model}
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
