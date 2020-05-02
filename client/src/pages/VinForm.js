import React from "react";
import { Link, NavLink} from "react-router-dom";
// import ReactDOM from "react-dom";
import {Form, Input, Button} from "reactstrap"
import API from "../utils/API";
import VinCard from "../components/vinCard";
import '../App.css';



class MyForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      vehicleData: [],
      vinNum: "", 
      car: ""
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    API.getCar(this.state.vinNum).then((res) => {
      this.setState({ car: res })
      this.setState({ vehicleData: res.data });
    });

  };
  

  myChangeHandler = (event) => {
    this.setState({ vinNum: event.target.value });
  };
  
  
  
  render() {
    return (

      <div className="vinform" style={{display: "flex"}}>
        <div style={{minWidth: "450px"}}>
        <Form onSubmit={this.mySubmitHandler}>
          
          <input type="text" onChange={this.myChangeHandler} 
                 style={{width: "250px", height: "38px", padding: "5px",
                         marginRight: "5px", borderRadius: "5px",
                         border: "1px solid #fff"}}
                 placeholder="Please enter your VIN number"/>
          <Button variant="primary" type="submit" style={{marginTop: "-3px"}}>Submit</Button>
        </Form>
        <div>
          <VinCard vData={ this.state.vehicleData } />
          <Link to={{ 
        pathname: "/movie",
        state: this.state.car.data
        }} 
        className="movieLink">
        Movies featuring your car's make and model
      </Link>
        </div>
        </div>
        <div className="buttons" >
        <h6 style={{fontWeight: "bold", marginLeft: "5px"}}>How may we help you</h6>
       {/* <Button onClick={this.catalog} variant="dark" type="button">Catalog</Button>
        <Button onClick={this.schedule} variant="dark" type="button">schedule an Appointment</Button>
    <Button onClick={this.logout} variant="dark" type="button">Logout</Button>*/}
        <Link to="/parts" className="btn btn-primary vinbtn">Catalog</Link>
        <Link to="/schedule" className="btn btn-primary vinbtn">Book an Appointment</Link>
        <Link to="/mygarage-kaera" className="btn btn-primary vinbtn">Logout</Link>
       {/* <NavLink
  to="/parts"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  Catalog
</NavLink>
<NavLink
  to="/schedule"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  Schedule an appointment
</NavLink>
<NavLink
  to="/mygarage-kaera"
  activeStyle={{
    fontWeight: "bold",
    color: "black"
  }}
>
  Logout
</NavLink>*/}
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
