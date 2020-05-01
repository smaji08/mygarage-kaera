import React, { useState } from "react";
import { TabContent, Container } from "reactstrap";
import TabHeading from "../components/TabHeading";
import TabId1 from "../components/TabId1";
import TabId2 from "../components/TabId2";
import TabId3 from "../components/TabId3";
import TabId4 from "../components/TabId4";
import bgImg from "../assets/images/service.jpg";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [chosenServices, setChosenServices] = useState([]);
  const [otherService, setOtherService] = useState("");
  const [car, setCar] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div
      style={{
        backgroundColor: "#FBD786",
        background: `url(${bgImg}) center / cover`,
      }}
    >
      <Container style={{ minHeight: "100vh" }}>
        <TabHeading activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabContent activeTab={activeTab}>
          <TabId1
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            // car={car}
            setCar={setCar}
          />
          <TabId2
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            chosenServices={chosenServices}
            setChosenServices={setChosenServices}
            // otherService={otherService}
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
    </div>
  );
};

export default Schedule;
