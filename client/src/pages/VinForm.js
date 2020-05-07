import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import API from "../utils/API";
import VinCard from "../components/VinCard";
import UserVehicles from "../components/UserVehicles";
import SimpleForm from "../utils/SimpleForm";
import "./style.css";

// import { NavLink } from 'react-router-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.username,
      vinNum: "",
      vehicleData: [],
      userVehicles: [],
    };
  }

  componentWillMount() {
    console.log("--> trying to get vehicle");
    this.setState({ userName: "rr" });
    API.getUserVehicles(this.state.userName)
      .then((res) => {
        console.log("Data-->" + Object.values(res.data[0]));
        const uvData = res.data;
        this.setState({ userVehicles: uvData });
      })
      .catch((err) => console.log(err));
  }

  mySubmitHandler = async (event) => {
    event.preventDefault();
    await API.getCar(this.state.vinNum).then((res) => {
      this.setState({ vehicleData: res.data });
      this.setState({ userName: "rr" });
    });
    if (this.state.vehicleData) {
      let { make, model } = this.state.vehicleData;
      console.log("--->> userName ==>" + this.state.userName);
      await API.saveVehicle({
        vinNumber: this.state.vinNum,
        vehicleData: this.state.vehicleData,
        makemodel: `${make} ${model}`,
        userName: this.state.userName,
      })
        .then(
          API.getUserVehicles(this.state.userName).then((res) => {
            console.log("Result-->" + res);
            console.log("Data-->" + res.data.makemodel);
            const uvData = res.data;
            this.setState({ userVehicles: uvData });
          })
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
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
          <div>
            <UserVehicles vehicleData={this.state.userVehicles} />
          </div>
        </div>
        <SimpleForm name="NAME"></SimpleForm>
      </div>
    );
  }
}

export default MyForm;
