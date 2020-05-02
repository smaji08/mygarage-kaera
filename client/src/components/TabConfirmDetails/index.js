import React from "react";
import moment from "moment";
import { ListGroup, ListGroupItem } from "reactstrap";

const TabConfirmDetails = ({ car, dateTime, chosenServices, otherService }) => {
  return (
    <>
      {car ? (
        <>
          <div style={{ padding: "10px" }}>
            <h3>The Selected Car for Service</h3>
            <h4 style={{ color: "#CF6700" }}>{car}</h4>
          </div>
          <div style={{ padding: "10px" }}>
            <h3>Appointment Date and Time</h3>
            <h4 style={{ color: "#CF6700" }}>
              {moment(dateTime).format("LLLL")}
            </h4>
          </div>
          {chosenServices.length > 0 || otherService ? (
            <div style={{ padding: "10px" }}>
              <h5>Services Chosen</h5>
              <ListGroup>
                {chosenServices.map((chosen, index) => {
                  return (
                    <ListGroupItem key={index} color="warning">
                      {chosen}
                    </ListGroupItem>
                  );
                })}
                <ListGroupItem color="success">
                  <p>
                    <strong>Customer Request</strong>
                  </p>
                  {otherService}
                </ListGroupItem>
              </ListGroup>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <h3>Please Choose a car to begin with...Click "Next"</h3>
      )}
    </>
  );
};

export default TabConfirmDetails;
