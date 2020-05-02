import React from "react";
import { Button } from "reactstrap";

const TabButton = ({ activeTab, setActiveTab }) => {
  function handleClick(e) {
    if (e.target.value === "next") {
      if (activeTab === "1") setActiveTab("2");
      if (activeTab === "2") setActiveTab("3");
      if (activeTab === "3") setActiveTab("4");
      if (activeTab === "4") setActiveTab("1");
    } else {
      if (activeTab === "1") setActiveTab("4");
      if (activeTab === "2") setActiveTab("1");
      if (activeTab === "3") setActiveTab("2");
      if (activeTab === "4") setActiveTab("3");
    }
  }
  return (
    <div className="clearfix" style={{ padding: ".5rem" }}>
      <Button
        className="btn  float-left"
        style={{ backgroundColor: "#D4D24E", color: "black" }}
        value="prev"
        onClick={(e) => handleClick(e)}
      >
        Previous
      </Button>
      <Button
        className="btn  float-right"
        style={{ backgroundColor: "#D4D24E", color: "black" }}
        value="next"
        onClick={(e) => handleClick(e)}
      >
        Next
      </Button>
    </div>
  );
};

export default TabButton;
