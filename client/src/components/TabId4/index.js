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
import "./index.css";
import TabConfirmDetails from "../TabConfirmDetails";
import useContactForm from "../../utils/CustomHook";
import API from "../../utils/API";
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
    if (car && inputs.firstName && inputs.lastName && inputs.phone) {
      API.createUser({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        address: inputs.address,
        city: inputs.city,
        state: inputs.state,
        zip: inputs.zip,
        phone: inputs.phone,
        type: inputs.type,
        email: inputs.email,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      API.createSchedule({
        car: car,
        service: chosenServices,
        misc: otherService,
        schDateTime: dateTime,
      })
        // .then((res) => console.log(res))
        .then((res) => alert("Confirmation Done"))
        .catch((err) => console.log(err));
    }
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
      <Form onSubmit={handleSubmit}>
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
                  {/* <Form> */}
                  <Row form>
                    <Col md={6}>
                      <FormGroup className="required">
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          onChange={handleInputChange}
                          value={inputs.firstName}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="required">
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
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
                          onChange={handleInputChange}
                          value={inputs.state}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input
                          type="text"
                          name="zip"
                          onChange={handleInputChange}
                          value={inputs.zip}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup className="required">
                        <Label for="phone">Phone</Label>
                        <Input
                          type="number"
                          name="phone"
                          onChange={handleInputChange}
                          value={inputs.phone}
                          required
                          onInput={(e) => {
                            e.target.value = Math.max(
                              0,
                              parseInt(e.target.value)
                            )
                              .toString()
                              .slice(0, 10);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="phoneType">Select</Label>
                        <Input
                          type="select"
                          name="type"
                          onChange={handleInputChange}
                          value={inputs.type}
                        >
                          <option value=""></option>
                          <option value="Home">Home</option>
                          <option value="Mobile">Mobile</option>
                          <option value="Work">Work</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                      value={inputs.email}
                    />
                  </FormGroup>
                  <br></br>
                  <Button className="btn btn-warning " size="lg" block>
                    <h4>
                      <strong>Confirm</strong>
                    </h4>
                  </Button>
                  {/* </Form> */}
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
              <hr></hr>
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />
            </Card>
          </Col>
        </Row>
      </Form>
    </TabPane>
  );
};
export default TabId4;
