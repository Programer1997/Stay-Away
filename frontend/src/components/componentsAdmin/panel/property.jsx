import React from "react";
import DataTable from "./fetchDataToTable/propertysTable.jsx";

export default function Property() {
  const namesOfColumns = {
    c1: "ID",
    c2: "Address",
    c3: "City",
    c4: "Price",
    c5: "Owner",
    c6: "Edition",
  };

  return (
    <>
      <DataTable nameColumns={namesOfColumns} />
    </>
  );
}
