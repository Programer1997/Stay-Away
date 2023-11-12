import React from "react";
import "./cardUser.scss";

export default function cardUsers(props) {
  return (
    <>
      <div className="cardContainer">
        <div className="infoUser">
          <p>{props.firstName}</p>
          <p>{props.lastName}</p>
          <p>{props.email}</p>
        </div>
        <div className="buttonsUsers">
          <button className="editBtn">Edit</button>
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    </>
  );
}
