import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { tabHeadings } from "../../staticData";

const TabHeading = (props) => {
  //   const [activeTab, setActiveTab] = useState("1");
  // console.log(props);

  const toggleTab = (tab) => {
    if (props.activeTab !== tab) props.setActiveTab(tab);
  };
  return (
    <Nav tabs>
      {tabHeadings.map((tabHead) => {
        return (
          <NavItem key={tabHead.key}>
            <NavLink
              className={classnames({
                active: props.activeTab === tabHead.key,
              })}
              onClick={() => {
                toggleTab(tabHead.key);
              }}
            >
              {tabHead.heading}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};
export default TabHeading;
