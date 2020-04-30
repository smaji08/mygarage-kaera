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
            style={{ backgroundColor: "#C5796D", borderColor: "#333" }}
          >
            <CardTitle>
              <h3>Choose the Date and Time</h3>
            </CardTitle>

            <DateTimePicker dateTime={dateTime} setDateTime={setDateTime} />
            {/* <div>date time is : {new Date(dateTime).toString()}</div> */}

            <hr></hr>

            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
};
export default TabId3;
