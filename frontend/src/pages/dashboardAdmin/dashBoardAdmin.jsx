import React, { useState } from "react";
import "./dashBoardAdmin.scss";
import SideBar from "../../components/componentsAdmin/sideBar/sideBar.jsx";
import Customer from "../../components/componentsAdmin/customers/customer.jsx";

export default function DashBoardAdmin() {
  const [dataUsers, setDataUsers] = useState([]);

  return (
    <div className="dashBoardPanel">
      <SideBar />
      <div className="panel">
        <Customer dataUsers={dataUsers} setDataUsers={setDataUsers} />
        {console.log(dataUsers)}
      </div>
    </div>
  );
}
