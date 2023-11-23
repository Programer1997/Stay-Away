import React, { useContext } from "react";
import DataTable from "../panel/fetchDataToTable/fetchDataToTable.jsx";
import { useCustomerContext } from "../../../context/customer-context.jsx";

const Customer = () => {
  const { customer, updateCustomer, deleteCustomer } = useCustomerContext();
  console.log(customer);
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
        state={customer}
        onUpdate={updateCustomer}
        nameColumns={namesOfColumns}
        onDelete={deleteCustomer}
      />
    </>
  );
};

export default Customer;
