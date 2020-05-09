import React, { useState, useEffect } from "react";
import { TabContent, Container } from "reactstrap";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Alert } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
// import { Transition, TransitionGroup } from "react-transition-group";
import TabHeading from "../components/TabHeading";
import TabId1 from "../components/TabId1";
import TabId2 from "../components/TabId2";
import TabId3 from "../components/TabId3";
import TabId4 from "../components/TabId4";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import bgImg from "../assets/images/service.jpg";
import SimpleForm from "../utils/SimpleForm";
import API from "../utils/API";
import "./style.css";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [chosenServices, setChosenServices] = useState([]);
  const [otherService, setOtherService] = useState("");
  const [car, setCar] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [show, setShow] = useState(true);
  // const [user, setUser] = useState("");

  const location = useLocation();
  const history = useHistory();

  // setUser(location.state.username);
  var user = location.state.username;
  // console.log(user);

  const [dateTime, setDateTime] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );

  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    loadVehicles();
    alertSchedules();
  }, []);

  function loadVehicles() {
    API.getVehicle(user)
      // .then((res) => console.log(res.data))
      .then((res) => setVehicles(res.data))
      .catch((err) => console.log(err));
  }

  function alertSchedules() {
    API.getSchedule(user)
      // .then((res) => console.log(res.data))
      .then((res) => {
        setSchedules(res.data);
        schedules ? setShow(true) : setShow(false);
      })
      .catch((err) => console.log(err));
  }
  // console.log(activeTab);
  function goBackHandle() {
    history.goBack();
  }

  return (
    <div
      style={{
        background: `url(${bgImg}) center / cover`,
      }}
    >
      <Navbar
        dark
        style={{
          fontSize: "20px",
          fontFamily: `"Roboto Mono", "monospace"`,
        }}
      >
        <Nav>
          <NavItem>
            <NavLink href="/vehicle" onClick={goBackHandle}>
              Add Cars
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/parts">Parts Catalog</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem style={{ color: "#C12824", fontSize: "30px" }}>
            <NavLink>Hello {user}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink href="/">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container style={{ minHeight: "100vh", maxWidth: "55%" }}>
        {show && schedules
          ? schedules.map((schedule) => {
              let date = new Date(schedule.schDateTime).toDateString();
              let time = new Date(schedule.schDateTime).toLocaleTimeString();
              return (
                <Alert
                  key={schedule._id}
                  variant="info"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <h5>
                    You have an appointment for your <b>{schedule.car}</b> on{" "}
                    <b>{date} </b>at <b>{time}</b>
                  </h5>
                </Alert>
              );
            })
          : ""}

        <TabHeading activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabContent activeTab={activeTab}>
          <TabId1
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            car={car}
            setCar={setCar}
            vehicles={vehicles}
          />
          <TabId2
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            chosenServices={chosenServices}
            setChosenServices={setChosenServices}
            otherService={otherService}
            setOtherService={setOtherService}
          />
          <TabId3
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            dateTime={dateTime}
            setDateTime={setDateTime}
          />
          <TabId4
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            chosenServices={chosenServices}
            otherService={otherService}
            car={car}
            dateTime={dateTime}
            user={user}
          />
        </TabContent>
      </Container>

      <SimpleForm name={user}></SimpleForm>
    </div>
  );
};

export default Schedule;
