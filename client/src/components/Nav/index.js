import React from "react";
import "./style.css";
import { Navbar } from "reactstrap";
// import { Link } from "react-router-dom";
// import CarPic from "../../images/car.jpg";

export default function Example(props) {
  return (
    <>
      <Navbar className="navbar" style={{ backgroundColor: "#E74D57" }}>
        <h2>
          <a href="/" style={{ color: "wheat" }}>
            {/* <img
              className="img-responsive2"
              src="../../images/car.jpg"
              alt=""
            ></img>{" "} */}
            MyGarage{" "}
          </a>
        </h2>
      </Navbar>
    </>
  );
}
