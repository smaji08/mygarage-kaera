import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "../App.css";
// import { NavLink } from 'react-router-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      car: "",
      vinNum: "", 
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    API.getMovie(this.state.vinNum).then((res) => {
      this.setState({ car: res.data });
    });
  };

  myChangeHandler = (event) => {
    this.setState({ vinNum: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Hello</p>
      <Link to={{ 
        pathname: "/movie",
        state: this.state.car.data
        }} 
        className="movieLink">
        Movies featuring your car's make and model
      </Link>
      </div>
           
    );
  }
}

export default MyForm;
