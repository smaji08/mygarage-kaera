import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";
import VinCard from "../components/VinCard";
import { Link } from "react-router-dom";
import SimpleForm from "../utils/SimpleForm";
import "./style.css";
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.h);
//     this.state = {
//       vinNum: "",
//       vehicleData: [],
//     };
//   }
//   mySubmitHandler = async (event) => {
//     event.preventDefault();
//     await API.getCar(this.state.vinNum).then((res) => {
//       this.setState({ vehicleData: res.data });
//     });
//     if (this.state.vehicleData) {
//       let { make, model } = this.state.vehicleData;
//       await API.saveVehicle({
//         vinNumber: this.state.vinNum,
//         vehicleData: this.state.vehicleData,
//         makemodel: `${make} ${model}`,
//       })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
//     }
//   };
//   myChangeHandler = (event) => {
//     this.setState({ vinNum: event.target.value });
//   };
//   render() {
//     return (
//       <div>
//         <div className="vinform" style={{ display: "flex" }}>
//           <div style={{ minWidth: "450px" }}>
//             <Form onSubmit={this.mySubmitHandler}>
//               <input
//                 type="text"
//                 onChange={this.myChangeHandler}
//                 style={{
//                   width: "250px",
//                   height: "38px",
//                   padding: "5px",
//                   marginRight: "5px",
//                   borderRadius: "5px",
//                   border: "1px solid #fff",
//                 }}
//                 placeholder="Please enter your VIN number"
//               />
//               <Button
//                 variant="primary"
//                 type="submit"
//                 style={{ marginTop: "-3px" }}
//               >
//                 Submit
//               </Button>
//             </Form>
//             <div>
//               <div>
//                 <VinCard vData={this.state.vehicleData} />
//               </div>
//             </div>
//           </div>
//           <div className="buttons">
//             <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}>
//               How may we help you
//             </h6>
//             <Link to="/parts" className="btn btn-primary vinbtn">
//               Catalog
//             </Link>
//             <Link to="/schedule" className="btn btn-primary vinbtn">
//               Book an Appointment
//             </Link>
//             <Link to="/mygarage-kaera" className="btn btn-primary vinbtn">
//               Logout
//             </Link>
//           </div>
//         </div>
//         <SimpleForm name="NAME"></SimpleForm>
//       </div>
//     );
//   }
// }
// export default MyForm;
function MyForm(params) {
  const [vinNum, setvinNum] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [recdData, setRecdData] = useState(false);

  const location = useLocation();

  var user = location.state.username;
  // console.log(user);

  async function mySubmitHandler(event) {
    event.preventDefault();
    await API.getCar(vinNum).then((res) => {
      setVehicleData(res.data);
      setRecdData(true);
    });
    if (vehicleData && recdData) {
      let { make, model } = vehicleData;
      await API.saveVehicle({
        username: user,
        vinNumber: vinNum,
        vehicleData: vehicleData,
        makemodel: `${make} ${model}`,
      })
        .then((res) => {
          // console.log(res);
          setRecdData(false);
        })
        .catch((err) => console.log(err));
    }
  }
  function myChangeHandler(event) {
    setvinNum(event.target.value);
  }
  return (
    <div>
      <div className="vinform" style={{ display: "flex" }}>
        <div style={{ minWidth: "450px" }}>
          <Form onSubmit={mySubmitHandler}>
            <input
              type="text"
              onChange={myChangeHandler}
              style={{
                width: "250px",
                height: "38px",
                padding: "5px",
                marginRight: "5px",
                borderRadius: "5px",
                border: "1px solid #fff",
              }}
              placeholder="Please enter your VIN number"
            />
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "-3px" }}
            >
              Submit
            </Button>
          </Form>
          <div>
            <div>
              <VinCard vData={vehicleData} />
            </div>
          </div>
        </div>

        <div>
          <h3>
            <strong>Welcome {user}</strong>
          </h3>
        </div>
        <div className="buttons">
          <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}>
            How may we help you
          </h6>
          <Link to="/parts" className="btn btn-primary vinbtn">
            Catalog
          </Link>
          {/* <Link to="/schedule" className="btn btn-primary vinbtn">
            Book an Appointment
          </Link> */}
          <Link
            to={{
              pathname: "/schedule",
              state: { username: user },
            }}
            className="btn btn-primary vinbtn"
          >
            Book an Appointment
          </Link>
          <Link to="/mygarage-kaera" className="btn btn-primary vinbtn">
            Logout
          </Link>
        </div>
      </div>
      <SimpleForm name={user}></SimpleForm>
    </div>
  );
}
export default MyForm;
