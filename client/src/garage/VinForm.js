import React from "react";
import ReactDOM from "react-dom";
import API from "../utils/API";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vinNum: "" };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.vinNum);
    API.getCar(this.state.vinNum).then((res) => {
      console.log(res);
    });
  };
  myChangeHandler = (event) => {
    this.setState({ vinNum: event.target.value });
  };
  
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello </h1>
        <p>Please enter your VIN, and submit:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" />
      </form>
    );
  }
}
export default MyForm;
