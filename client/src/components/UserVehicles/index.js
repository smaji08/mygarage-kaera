import React from "react";
import { Table } from "react-bootstrap";

let UserVehicles = ({ vehicleData }) => {
  if (vehicleData[0] !== undefined) {
      console.log('Rendring table-->>' + vehicleData[0])
      let keyNum = 0;
    return (
      <div>
        <Table
          striped bordered hover variant="light"
          style={{ width: "400px", margin: "auto", textAlign: "center", backgroundColor: "#8a857d5c" }}
        >
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
            </tr>
            {vehicleData.map((data) => (
              <tr key={keyNum++}>
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
