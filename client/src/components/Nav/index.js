import React from "react";
import "./style.css";
import { Navbar, NavbarBrand } from "reactstrap";
// import CarPic from "../../images/car.jpg";

export default function Example(props) {
  return (
    <div>
      <Navbar color="faded" light>
        <h2 class="navbar-brand brand-name">
          <a href="/">
            <img class="img-responsive2" src="../../images/car.jpg"></img>{" "}
            MyGarage{" "}
          </a>
        </h2>
      </Navbar>
    </div>
  );
}
