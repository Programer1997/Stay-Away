import React, { useState } from "react";
import "./sideBar.scss";
import elementsAdminBar from "../../../mocks/sideBarElements.json";
import SideBarItems from "./sideBarItems";

const SideBar = (props) => {
  const sideBarElements = elementsAdminBar;
  const [propertySelected, setPropertySelected] = useState("dashboard");

  return (
    <div className="container">
      <div className="logoDashBoard">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/images/administrator.png"}
          alt="dashBoard charging..."
        />
        <h3 className="titleDash">Desk Board</h3>
      </div>

      <ul className="navbar-one">
        {Object.values(sideBarElements.elementos_1).map((element) => {
          return (
            <SideBarItems
              key={element.id}
              name={element.title}
              img={element.img_Url}
              selected={element.title === propertySelected}
              setPropertySelected={() => {
                setPropertySelected(element.title);
                props.setSelectedElement(element.title);
              }}
            />
          );
        })}
      </ul>
      <h4 className="supportTitle">Support</h4>
      <ul className="navbar-one">
        {Object.values(sideBarElements.elementos_2).map((element) => {
          return (
            <SideBarItems
              key={element.id}
              name={element.title}
              img={element.img_Url}
              selected={element.title === propertySelected}
              setPropertySelected={() => {
                setPropertySelected(element.title);
                props.setSelectedElement(element.title);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
