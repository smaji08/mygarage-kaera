import React from "react";
import {Form, Input, Button} from "react-bootstrap"
import API from "../utils/API";
import VinCard from "../components/vinCard";

import '../App.css'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: [],
    };
  }
  state = {
    vinNum: "",
    vehicleData: [],
  };

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
      <div className="vinform">
        <Form onSubmit={this.mySubmitHandler}>
          <h1>Hello </h1>
          <p>Please enter your VIN, and submit:</p>
          <input type="text" onChange={this.myChangeHandler} />
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <div>
          <VinCard vData={ this.state.vehicleData } />
        </div>
      </div>
    );

    /* <vinCard
       // id={friend.id}
       // key={friend.id}*/

    //make={res.data.make}
    //model={res.data.model}
    //year={res.data.year}
    //trim={res.data.trim}
    //body-type={res.data.body_type}
    //transmission={res.data.transmission}
    //fuel-type={res.data.fuel_type}
    //engine={res.data.engine}
    //drivetrain={res.data.drivetrain}
    //vehicle-type={res.data.vehicle_type}
    ///>*/}
  }
}

export default MyForm;
