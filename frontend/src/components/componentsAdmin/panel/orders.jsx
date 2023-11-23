import React from "react";
import DataTable from "./fetchDataToTable/fetchDataToTable.jsx";
import { useCustomerContext } from "../../../context/customer-context.jsx";

export default function Orders() {
  const { customers, updateCustomer } = useCustomerContext();

  const namesOfColumns = {
    id: "ID",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    edition: "Edition",
  };
  return (
    <>
      <DataTable
        state={customers}
        onUpdate={updateCustomer}
        nameColumns={namesOfColumns}
      />
    </>
  );
}
