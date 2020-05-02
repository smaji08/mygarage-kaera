import React from "react";
import { Button } from 'reactstrap';
import "./style.css";

export default function MovieBtn(props) {
    return (
        <>
        <input className="input" 
            placeholder=" Search for a part" 
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
                {/* search = (vin.make && vin.model || vin.make || vin.model) */}
            Movie
        </Button>
        </>
    )
}