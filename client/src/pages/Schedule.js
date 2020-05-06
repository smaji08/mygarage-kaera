import React, { useState, useEffect } from "react";
import { TabContent, Container } from "reactstrap";
import { Navbar, Nav, NavItem, NavLink, Progress } from "reactstrap";

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
  const [dateTime, setDateTime] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );

  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    loadVehicles();
  }, []);

  function loadVehicles() {
    API.getVehicle()
      .then((res) => setVehicles(res.data))
      .catch((err) => console.log(err));
  }
  console.log(activeTab);

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
            <NavLink href="/vehicle/">Add Cars</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/parts">Parts Catalog</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink href="/">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container style={{ minHeight: "100vh", maxWidth: "55%" }}>
        <TabHeading activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* <Progress value={value} /> */}

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
          />
        </TabContent>
      </Container>

      <SimpleForm name="NAME"></SimpleForm>
    </div>
  );
};

export default Schedule;
