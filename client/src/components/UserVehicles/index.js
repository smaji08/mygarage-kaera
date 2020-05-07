import React from "react";
import { Table } from "react-bootstrap";

let UserVehicles = ({ vehicleData }) => {
  if (vehicleData !== undefined || vehicleData != null) {
      console.log('Rendring table--' + vehicleData)
    return (
      <div >
        <Table striped bordered hover variant="light"
          style={{ maxWidth: "90%", margin: "auto", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
            </tr>
            {vehicleData.map((data) => (
              <tr>
                <td>{data.vehicleData.make}</td>
                <td>{data.vehicleData.model}</td>
                <td>{data.vehicleData.year}</td>
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  } else {
      return(
        <div>&nbsp;</div>
      )
      
  }
};

export default UserVehicles;
