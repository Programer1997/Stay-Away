import React from "react";
import DataTable from "./fetchDataToTable/bookingsTable.jsx";

export default function Bookings({ setAddModal, addModal }) {
  const namesOfColumns = {
    c1: "ID",
    c2: "User Name",
    c3: "Rol",
    c4: "Property",
    c5: "Check-in",
    c6: "Check-out",
    c7: "Edition",
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
