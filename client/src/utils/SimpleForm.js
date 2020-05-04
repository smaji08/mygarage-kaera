import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";
import { ThemeProvider } from "styled-components";
import avatar from "../assets/images/avatarboy.png";
import useravatar from "../assets/images/user.png";

const theme = {
  headerBgColor: "#f64f59",
  // background: "lightblue",
  background: "#f5f8fb",
  // fontFamily: "Helvetica Neue",
  // headerBgColor: '#EF6C00',
  headerFontColor: "wheat",
  headerFontSize: "25px",
  botBubbleColor: "#DDB997",
  // botFontColor: "#fff",
  userBubbleColor: "#DADDE4",
  // userFontColor: "#4a4a4a",
};

const SimpleForm = (props) => {
  // render() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating="true"
        headerTitle="myGarage-ChatBot"
        botAvatar={avatar}
        userAvatar={useravatar}
        width="325px"
        steps={[
          {
            id: "1",
            message: `Hi ${props.name}, how can I help you`,
            trigger: "help",
          },
          {
            id: "help",
            options: [
              { value: "parts", label: "Looking for parts", trigger: "3" },
              { value: "home", label: "Add Cars", trigger: "4" },
              {
                value: "appointment",
                label: "Schedule Appointment",
                trigger: "5",
              },
              { value: "other", label: "Other service", trigger: "6" },
            ],
          },

          {
            id: "3",

            component: (
              <div>
                Please checkout this.. <br></br>
                <Link to="/parts" className="btn btn-primary ">
                  Catalog
                </Link>
              </div>
            ),
            asMessage: true,
            trigger: "end-message",
          },

          {
            id: "4",
            component: (
              <div>
                Please checkout this..<br></br>
                <Link to="/vehicle" className="btn btn-primary ">
                  Add Cars
                </Link>
              </div>
            ),
            asMessage: true,
            trigger: "end-message",
          },

          {
            id: "5",
            component: (
              <div>
                Please checkout this..<br></br>
                <Link to="/schedule" className="btn btn-primary ">
                  Schedule
                </Link>
              </div>
            ),
            asMessage: true,
            trigger: "end-message",
          },

          {
            id: "6",
            message: `No problem ${props.name}, please enter your phone/email and best time to contact you..`,
            trigger: "contact",
          },

          {
            id: "contact",
            user: true,
            trigger: "7",
          },

          {
            id: "7",
            message: "Great! Check out your summary",
            trigger: "review",
          },

          {
            id: "review",
            component: <Review name={props.name} />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "Would you like to update some field?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              {
                value: "contact",
                label: "Phone/Email/Time",
                trigger: "update-contact",
              },
            ],
          },
          {
            id: "update-contact",
            update: "contact",
            trigger: "7",
          },

          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
  // }
};
export default SimpleForm;
