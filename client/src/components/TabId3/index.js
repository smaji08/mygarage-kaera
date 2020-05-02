import React from "react";
import { TabPane, Card, CardTitle, Row, Col } from "reactstrap";
import DateTimePicker from "../../utils/datatimepicker";
import TabButton from "../TabButton";

const TabId3 = ({ activeTab, setActiveTab, dateTime, setDateTime }) => {
  return (
    <TabPane tabId="3">
      <Row>
        <Col sm="12">
          <Card
            body
            inverse
            style={{ backgroundColor: "#3a6186", borderColor: "#333" }}
          >
            <CardTitle>
              <h3>Choose the Date and Time</h3>
            </CardTitle>

            <DateTimePicker dateTime={dateTime} setDateTime={setDateTime} />

            <hr></hr>

            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
};
export default TabId3;
