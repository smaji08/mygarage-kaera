import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { tabHeadings } from "../../staticData";

//<i class="fas fa-tools"></i>
//<i className="fas fa-car"></i>
//<i class="fas fa-clock"></i>
//<i class="fas fa-check-double"></i>

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
          <NavItem key={tabHead.key} style={{ color: "white" }}>
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
