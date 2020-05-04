import React from "react";
import { Form, Input, Button } from "react-bootstrap";
import API from "../utils/API";
import VinCard from "../components/VinCard";
import { Link } from "react-router-dom";
// import "../App.css";
import "./style.css";
// import { NavLink } from 'react-router-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vinNum: "",
      vehicleData: [],
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    API.getCar(this.state.vinNum).then((res) => {
      this.setState({ vehicleData: res.data });
    });
  };

  myChangeHandler = (event) => {
    this.setState({ vinNum: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="vinform" style={{ display: "flex" }}>
          <div style={{ minWidth: "450px" }}>
            <Form onSubmit={this.mySubmitHandler}>
              <input
                type="text"
                onChange={this.myChangeHandler}
                style={{
                  width: "250px",
                  height: "38px",
                  padding: "5px",
                  marginRight: "5px",
                  borderRadius: "5px",
                  border: "1px solid #fff",
                }}
                placeholder="Please enter your VIN number"
              />
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "-3px" }}
              >
                Submit
              </Button>
            </Form>
            <div>
              <div>
                <VinCard vData={this.state.vehicleData} />
              </div>
            </div>
          </div>
          <div className="buttons">
            <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}>
              How may we help you
            </h6>
            <Link to="/parts" className="btn btn-primary vinbtn">
              Catalog
            </Link>
            <Link to="/schedule" className="btn btn-primary vinbtn">
              Book an Appointment
            </Link>
            <Link to="/mygarage-kaera" className="btn btn-primary vinbtn">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyForm;
