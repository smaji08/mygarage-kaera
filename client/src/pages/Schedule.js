import React, { useState } from "react";
import { TabContent, Container } from "reactstrap";
import TabHeading from "../components/TabHeading";
import TabId1 from "../components/TabId1";
import TabId2 from "../components/TabId2";
import TabId3 from "../components/TabId3";
import TabId4 from "../components/TabId4";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import bgImg from "../assets/images/service.jpg";
import SimpleForm from "../utils/SimpleForm";
import "./style.css";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [chosenServices, setChosenServices] = useState([]);
  const [otherService, setOtherService] = useState("");
  const [car, setCar] = useState("");
  const [dateTime, setDateTime] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );
  // const [showChat, setShowChat] = useState(false);

  // const startChat = () => {
  //   setShowChat(true);
  // };
  // const hideChat = () => {
  //   setShowChat(false);
  // };

  return (
    <div
      style={{
        backgroundColor: "#FBD786",
        background: `url(${bgImg}) center / cover`,
      }}
    >
      <Container style={{ minHeight: "100vh", maxWidth: "55%" }}>
        <TabHeading activeTab={activeTab} setActiveTab={setActiveTab} />

        <TabContent activeTab={activeTab}>
          <TabId1
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            car={car}
            setCar={setCar}
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
      {/* <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}> */}
      <SimpleForm name="NAME"></SimpleForm>
      {/* </div> */}

      {/* <div>
          {!showChat ? (
            <button className="botbtn" onClick={() => startChat()}>
              click to chat...{" "}
            </button>
          ) : (
            <button className="botbtn" onClick={() => hideChat()}>
              click to hide...{" "}
            </button>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Schedule;
