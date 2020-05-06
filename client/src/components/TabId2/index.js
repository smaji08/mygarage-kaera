import React from "react";
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
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { services } from "../../staticData";
import TabButton from "../TabButton";
import "./index.css";

const TabId2 = ({
  activeTab,
  setActiveTab,
  chosenServices,
  setChosenServices,
  setOtherService,
}) => {
  function handleCheckedBoxes(e) {
    if (e.target.checked) chosenServices.push(e.target.id);

    for (let i = 0; i < chosenServices.length; i++) {
      if (e.target.id === chosenServices[i] && e.target.checked === false) {
        chosenServices.splice(i, 1);
      }
    }
    setChosenServices(chosenServices);
    // console.log(chosenServices);
  }
  //#3a6186
  return (
    <TabPane tabId="2">
      <Row>
        <Col sm="12">
          <Card
            body
            inverse
            style={{ backgroundColor: "#3a6186", borderColor: "#333" }}
          >
            <Row>
              <Col sm="6">
                <CardTitle style={{ textAlign: "center" }}>
                  <h3>Choose the Services</h3>
                </CardTitle>

                <FormGroup>
                  <div style={{ padding: "20px", border: "1px solid grey" }}>
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
              </Col>
              <Col sm="6">
                <CardTitle style={{ textAlign: "center" }}>
                  <h4>Chosen Services</h4>
                </CardTitle>
                <ListGroup>
                  {chosenServices.map((chosen, index) => {
                    return (
                      <ListGroupItem key={index} color="warning">
                        {chosen}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Col>
            </Row>
            <br></br>
            <FormGroup>
              <Label for="otherService">
                <h5>Other Service/Repair Request</h5>
              </Label>
              <Input
                type="textarea"
                name="otherService"
                id="otherService"
                rows="4"
                onChange={(e) => setOtherService(e.target.value)}
              />
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
