import React from "react";
import { Button } from "reactstrap";
import "./style.css";

export default function Input(props) {
  return (
    <div id="inputDiv">
      <input
        className="input form-control"
        placeholder=" Search for a part"
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        // className="form-control"
        id="search"
      />
      <br />
      <Button className="btn btn-primary" onClick={props.handleFormSubmit}>
        Save
      </Button>
    </div>
  );
}
