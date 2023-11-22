import React from "react";
import DataTable from "../panel/fetchDataToTable/fetchDataToTable.jsx";

const Customer = (props) => {
  const urlHook = "/users/testing/";
  const namesOfColumns = {
    id: "ID",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    edition: "Edition",
  };
  return (
    <>
      <DataTable urlHook={urlHook} nameColumns={namesOfColumns} />
    </>
  );
};

export default Customer;
