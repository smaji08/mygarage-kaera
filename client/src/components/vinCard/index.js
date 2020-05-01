import React from "react";
import {Card, ListGroup} from "react-bootstrap"

let VinCard = ({ vData }) => {
  
  if (vData.make !== undefined || vData.make != null) {
    return (
      <div className="card vincard">
        {/*<div className="img-container">
        <img alt={vData.name} src={vData.image} />
  </div>*/}
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
        
        {/*<span onClick={() => vData.removeFriend(vData.id)} className="remove">
        𝘅
</span>*/}
      </div>
    );
  } else {
      return <div><span>&nbsp;</span></div>
  }
};
export default VinCard