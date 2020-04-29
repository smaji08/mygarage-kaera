import React, { useState } from "react";
import {
  TabPane,
  Card,
  CardTitle,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { services } from "../../staticData";
import TabButton from "../TabButton";

const TabId2 = ({ activeTab, setActiveTab }) => {
  const [chosenServices, setChosenServices] = useState([]);

  function handleCheckedBoxes(e) {
    if (e.target.checked) chosenServices.push(e.target.id);

    for (let i = 0; i < chosenServices.length; i++) {
      if (e.target.id === chosenServices[i] && e.target.checked === false) {
        chosenServices.splice(i, 1);
      }
    }
    setChosenServices(chosenServices);
    console.log(chosenServices);
  }

  return (
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
              <Input type="textarea" name="text" id="exampleText" rows="4" />
            </FormGroup>

            <hr></hr>

            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
};
export default TabId2;
