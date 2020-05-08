import React from "react";
import {Card, ListGroup} from "react-bootstrap"

let VinCard = ({ vData }) => {
  console.log('vData=>>' + vData)
  if (vData.make !== undefined || vData.make != null) {
    console.log('Rendering vin card-->' + vData.make);
    return (
      <div className="card vincard">
        <Card >
        <ListGroup variant="flush">
            <ListGroup.Item><strong>Make:</strong> {vData.make}</ListGroup.Item>
            <ListGroup.Item><strong>Model:</strong> {vData.model}</ListGroup.Item>
            <ListGroup.Item><strong>Year:</strong> {vData.year}</ListGroup.Item>
            <ListGroup.Item><strong>Trim:</strong> {vData.trim}</ListGroup.Item>
            <ListGroup.Item><strong>Body-Type:</strong> {vData.body_type}</ListGroup.Item>
            <ListGroup.Item><strong>Transmission:</strong> {vData.transmission}</ListGroup.Item>
            <ListGroup.Item><strong>Fuel-Type:</strong> {vData.fuel_type}</ListGroup.Item>
            <ListGroup.Item><strong>Engine:</strong> {vData.engine}</ListGroup.Item>
            <ListGroup.Item><strong>Drivetrain:</strong> {vData.drivetrain}</ListGroup.Item>
            <ListGroup.Item><strong>Vehicle-Type:</strong> {vData.vehicle_type}</ListGroup.Item>
        </ListGroup>
        </Card>
      </div>
    );
  } else {
      return <div><span>&nbsp;</span></div>
  }
};

export default VinCard;