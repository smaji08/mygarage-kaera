import React from 'react';
import "./style.css";
import { Navbar, NavbarBrand} from 'reactstrap';
// import CarPic from "../../images/car.jpg";


export default function Example (props) {


 
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">MyGarage
        <div>
          {/* <img src = {CarPic} alt = "carpic"></img> */}
        </div>
        </NavbarBrand>
        
      </Navbar>
    </div>
    
  );
}

 
