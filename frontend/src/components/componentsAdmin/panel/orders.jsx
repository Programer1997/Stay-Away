import React from "react";
import DataTable from "./fetchDataToTable/fetchDataToTable.jsx";

export default function Orders() {
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
}
