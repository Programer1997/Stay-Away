import React, { useContext } from "react";
import { AuthContext } from "../../../context/authContext.js";
import { useNavigate } from "react-router-dom";

export default function SideBarItems(props) {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelected = () => {
    props.setPropertySelected();
    if (props.name === "logout") {
      handleLogout();
    }
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <li
      className={`list ${props.selected ? "list_two" : ""}`}
      onClick={handleSelected}
    >
      <img src={process.env.PUBLIC_URL + props.img} alt={props.name} />
      <p>{props.name}</p>
    </li>
  );
}
