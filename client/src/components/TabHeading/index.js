import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { tabHeadings } from "../../staticData";

const TabHeading = (props) => {
  const toggleTab = (tab) => {
    if (props.activeTab !== tab) props.setActiveTab(tab);
  };
  return (
    <Nav
      tabs
      style={{
        fontSize: "17px",
        fontFamily: `"Roboto Mono", "monospace"`,
      }}
    >
      {tabHeadings.map((tabHead) => {
        return (
          <NavItem key={tabHead.key} style={{ color: "#D4D24E" }}>
            <NavLink
              className={classnames({
                active: props.activeTab === tabHead.key,
              })}
              onClick={() => {
                toggleTab(tabHead.key);
              }}
            >
              {tabHead.key === "1" ? <i className="fas fa-car"></i> : ""}
              {tabHead.key === "2" ? <i className="fas fa-tools"></i> : ""}
              {tabHead.key === "3" ? <i className="fas fa-clock"></i> : ""}
              {tabHead.key === "4" ? (
                <i className="fas fa-check-double"></i>
              ) : (
                ""
              )}
              {tabHead.heading}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};
export default TabHeading;
