import React, { useState } from "react";
import TableList from "./listElements/listElements";
import HeaderTable from "./listElements/headerTable";
import FooterTable from "./listElements/footerTable";
import "./panel.scss";

const Property = ({ dataUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = dataUsers.slice(indexOfFirstUser, indexOfLastUser);
  const currentUsersDemo = dataUsers.slice(0, 5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredUsers = currentUsers.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (userId) => {
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID ${userId}`);
  };

  return (
    <div className="propertyTableContainer">
      <HeaderTable />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>edition</th>
          </tr>
        </thead>

        <tbody>
          {currentUsersDemo.map((user, index) => (
            <TableList
              key={index}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              username={user.username}
              className={index % 2 === 0 ? "evenRow" : ""}
            />
          ))}
        </tbody>
      </table>
      <FooterTable totalElements={dataUsers.length} />
    </div>
  );
};

export default Property;
