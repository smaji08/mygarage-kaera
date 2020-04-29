import React, { useState } from "react";
import { TabContent } from "reactstrap";

import TabHeading from "../components/TabHeading";
import TabId1 from "../components/TabId1";
import TabId2 from "../components/TabId2";
import TabId3 from "../components/TabId3";

const Schedule = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div>
      <TabHeading activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabContent activeTab={activeTab}>
        <TabId1 activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabId2 activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabId3 activeTab={activeTab} setActiveTab={setActiveTab} />
      </TabContent>
    </div>
  );
};

export default Schedule;
