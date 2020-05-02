import React from "react";
import {
  TabPane,
  Card,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import TabButton from "../TabButton";
// import moment from "moment";
import TabConfirmDetails from "../TabConfirmDetails";
import useContactForm from "../../utils/CustomHook";
const TabId4 = ({
  activeTab,
  setActiveTab,
  chosenServices,
  car,
  dateTime,
  otherService,
}) => {
  //#D1B6BA

  const confirmAppointment = () => {
    alert(`User Created! 
Name: ${inputs.firstName} ${inputs.lastName}
Address:${inputs.address}
city:${inputs.city}
state:${inputs.state}
zip:${inputs.zip}
phone:${inputs.phone}
type:${inputs.type}
Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useContactForm(
    {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      type: "",
      email: "",
    },
    confirmAppointment
  );
  return (
    <TabPane tabId="4">
      <Row>
        <Col sm="12">
          <Card
            body
            inverse
            style={{ backgroundColor: "#3A6186", borderColor: "#333" }}
          >
            <Row>
              <Col sm="7" style={{ padding: "20px" }}>
                <CardTitle style={{ textAlign: "center" }}>
                  <h4>Please Confirm your Selection</h4>
                </CardTitle>
                <Form onSubmit={handleSubmit}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          // id="firstName"
                          onChange={handleInputChange}
                          value={inputs.firstName}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          // id="lastName"
                          onChange={handleInputChange}
                          value={inputs.lastName}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      // id="address"
                      onChange={handleInputChange}
                      value={inputs.address}
                      placeholder="1234 Main St"
                    />
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                          type="text"
                          name="city"
                          // id="city"
                          onChange={handleInputChange}
                          value={inputs.city}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="state">State</Label>
                        <Input
                          type="text"
                          name="state"
                          // id="state"
                          onChange={handleInputChange}
                          value={inputs.city}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input
                          type="text"
                          name="zip"
                          // id="zip"
                          onChange={handleInputChange}
                          value={inputs.zip}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                          type="text"
                          name="phone"
                          // id="phone"
                          onChange={handleInputChange}
                          value={inputs.phone}
                          required
                          placeholder="(222)222-1234"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="phoneType">Select</Label>
                        <Input
                          type="select"
                          name="phoneType"
                          // id="phoneType"
                          onChange={handleInputChange}
                          value={inputs.type}
                        >
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
                      // id="email"

                      onChange={handleInputChange}
                      value={inputs.email}
                    />
                  </FormGroup>

                  <Button className="btn btn-success float-right">
                    Confirm
                  </Button>
                </Form>
              </Col>
              <Col md={5} style={{ padding: "20px" }}>
                <TabConfirmDetails
                  car={car}
                  dateTime={dateTime}
                  chosenServices={chosenServices}
                  otherService={otherService}
                />
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
