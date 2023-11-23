import React from "react";
import DataTable from "../panel/fetchDataToTable/fetchDataToTable.jsx";
import { useCustomerContext } from "../../../context/customer-context.jsx";

const Customer = () => {
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
};

export default Customer;
