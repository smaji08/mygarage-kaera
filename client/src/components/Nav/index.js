import React from "react";
import "./style.css";
import { Navbar } from "reactstrap";
// import CarPic from "../../images/car.jpg";

export default function Example(props) {
  return (
    <div>
      <Navbar color="faded" light>
        <h2 className="navbar-brand brand-name">
          <a href="/">
            <img
              className="img-responsive2"
              src="../../images/car.jpg"
              alt=""
            ></img>{" "}
            MyGarage{" "}
          </a>
        </h2>
      </Navbar>
    </div>
  );
}
