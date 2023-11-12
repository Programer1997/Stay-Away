import React, { useEffect } from "react";
import Axios from "axios";
import "./customer.scss";
import CardUsers from "./cardUsers.jsx";

const Customer = (props) => {
  useEffect(() => {
    Axios.get("/users/testing")
      .then((response) => {
        props.setDataUsers(response.data);
      })
      .catch((error) => {
        console.error("it has occurred an error", error);
      });
  }, []);

  return (
    <>
      <div className="cardUsersContainer">
        {props.dataUsers.map((element, index, array) => {
          return (
            <CardUsers
              key={index}
              firstName={element.firstName}
              lastName={element.lastName}
              email={element.email}
            />
          );
        })}
      </div>
    </>
  );
};

export default Customer;
