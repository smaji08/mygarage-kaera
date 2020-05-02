import React from "react";
import { Button } from 'reactstrap';
import "./style.css";

export default function Input(props) {
    return (
        <>
        <input className="input" 
            placeholder="What's your next movie?" 
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            classname="form-control"
            id="search"
        />
        <br />
        <Button className="btn btn-primary"
            onClick={props.handleFormSubmit}>
            Save
        </Button>
        </>
    )
}