import React, { useState } from "react";
import TableList from "../listElements/listElements.jsx";
import HeaderTable from "../listElements/headerTable.jsx";
import FooterTable from "../listElements/footerTable.jsx";
import "./fetchDataToTable.scss";

//testing Hook  :

const TableData = ({ nameColumns, state, onUpdate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);
  const [searchFilter, setSearchFilter] = useState("");

  //filter the data by seacrh but All the data no just the data showed up in that moment
  const filteredCustomers = state.filter((user) =>
    user.firstName.toLowerCase().includes(searchFilter.toLowerCase())
  );
  const initialValue = (currentPage - 1) * elementsPerPage;
  const lastValue = initialValue + elementsPerPage;
  const visibleData = filteredCustomers.slice(initialValue, lastValue); //this give to me part of my array with this values (index from start(0,1,2..stc),until index (5,6,7..etc))

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="propertyTableContainer">
      <HeaderTable
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <table>
        <thead>
          <tr>
            <th>{nameColumns.id}</th>
            <th>{nameColumns.firstName}</th>
            <th>{nameColumns.lastName}</th>
            <th>{nameColumns.email}</th>
            <th>{nameColumns.edition}</th>
          </tr>
        </thead>

        <tbody>
          {visibleData.map((user, index) => (
            <TableList
              key={index}
              idValue={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              username={user.username}
              className={index % 2 === 0 ? "evenRow" : ""}
              handleEdit={(dataUpdated) => {
                onUpdate(dataUpdated);
              }}
              handleDelete={() => {
                // handleDelete(user._id);
              }}
            />
          ))}
        </tbody>
      </table>
      <FooterTable
        totalElements={visibleData.length}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPageValue={currentPage}
        stopPage={Math.ceil(filteredCustomers.length / elementsPerPage)}
      />
    </div>
  );
};

export default TableData;
