import React from "react";
import DataTable from "./fetchDataToTable/fetchDataToTable.jsx";
import { usePropertContext } from "../../../context/propertysContext.jsx";

export default function Property({ setAddModal, addModal }) {
  const { property } = usePropertContext();
  console.log(property);

  const namesOfColumns = {
    c1: "ID",
    c2: "Address",
    c3: "City",
    c4: "Price",
    c5: "Available",
  };

  return (
    <>
      <DataTable
        nameColumns={namesOfColumns}
        setAddModal={setAddModal}
        addModal={addModal}
      />
    </>
  );
}
