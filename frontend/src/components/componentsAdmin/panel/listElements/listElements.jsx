import React from "react";

const List = (props) => {
  const handleEdit = (id) => {};
  const handleDelete = (id) => {};
  return (
    <tr className={props.className}>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <button className="edit-btn" onClick={() => handleEdit(props._id)}>
          &#9998;
        </button>
        <button className="delete-btn" onClick={() => handleDelete(props._id)}>
          &#128465;
        </button>
      </td>
    </tr>
  );
};

export default List;
