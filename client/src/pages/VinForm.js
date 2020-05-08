import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";
import VinCard from "../components/VinCard";
import { Link } from "react-router-dom";
import SimpleForm from "../utils/SimpleForm";
import "./style.css";
import UserVehicles from "../components/UserVehicles";

function MyForm(params) {
  // const [user, setUser] = useState("");

  const [vinNum, setvinNum] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [recdData, setRecdData] = useState(false);
  const [userVehicles, setUserVehicles] = useState([]);


  const location = useLocation();

  var user = location.state.username;

  //console.log("--->>" + user);
  // setUser(location.state.username);

  useEffect(() => {
    console.log("-useFffect-> trying to get vehicle");
    loadUserVehicles(user);
  }, []);

  function loadVehicle(id) {
    console.log('getting data for--->' + id)
    API.getVehicle(id).then((res) => { 
      console.log('Vehicle Data -->' + res.data)
      setVehicleData(res.data)
    });
  }

  function loadUserVehicles(user) {
    API.getUserVehicles(user)
      .then((res) => setUserVehicles(res.data))
      .catch((err) => console.log(err));
  }

  function checkVehicle(vinNum) {
    return userVehicles.findIndex(vehicle => vehicle.vinNumber === vinNum);
  }


  async function mySubmitHandler(event) {
    event.preventDefault();
    
    API.getCar(vinNum).then((res) => {
      console.log('=getCar=> Response data='+res.data)
      setVehicleData(res.data);

//       setRecdData(true);
//     });
//     if (vehicleData && recdData) {
//       let { make, model } = vehicleData;
//       await API.saveVehicle({
//         username: user,
//         vinNumber: vinNum,
//         vehicleData: vehicleData,
//         makemodel: `${make} ${model}`,
//       })
//         .then((res) => {
//           // console.log(res);
//           setRecdData(false);
//         })
//         .catch((err) => console.log(err));
//     }

      console.log("Vehicle Data=>" + vehicleData + "<-->" + res.data.make);
      let idx = checkVehicle(vinNum);
      console.log('idx---->>' + idx);
      if (res.data && idx === -1) {
        let { make, model } = res.data;
        API.saveVehicle({
          userName: user,
          vinNumber: vinNum,
          vehicleData: res.data,
          makemodel: `${make} ${model}`,
        }).then(
            (res) => setUserVehicles(res.data)
          ).catch((err) => console.log(err));
      }
    });
    

  }
  function myChangeHandler(event) {
    setvinNum(event.target.value);
  }
  return (
    <div>
      <div className="vinform" style={{ display: "flex" }}>
        <div style={{ minWidth: "500px" }}>
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
        <div>
          <h5 style={{textAlign: "center"}}><b>Welcome {user}</b></h5>
          <UserVehicles vehicleData={userVehicles} />
        </div>
      </div>

//       <SimpleForm name={user}></SimpleForm>


      <SimpleForm name="NAME"></SimpleForm>

    </div>
  );
}
export default MyForm;
