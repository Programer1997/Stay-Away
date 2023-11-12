import React from "react";

export default function sideBarItems(props) {
  const handleSelected = () => {
    props.setPropertySelected();
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
