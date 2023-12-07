import React, { useState } from "react";
//import { format } from "date-fns";

const List = (props) => {
  const formattedDate1 = props.checkIn.slice(0, 10);
  const formattedDate2 = props.checkOut.slice(0, 10);

  const initialValues = {
    _id: props.idValue,
    checkInDate: formattedDate1,
    checkOutDate: formattedDate2,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [dataEditing, setDataEditing] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataEditing({
      ...dataEditing,
      [name]: value,
    });
  };
  const handleEdition = () => {
    setIsEditing(true);
    setDataEditing(initialValues); //Issue fix it setting the state after prees "edit button"
  };

  const SaveEdition = () => {
    setIsEditing(false);
    props.handleEdit(dataEditing);
  };

  return (
    <tr className={props.className}>
      <td title={props.idValue}>{props.idValue.slice(-6) + "..."}</td>
      <td>{props.userName}</td>
      <td>{/*Rol*/} </td>
      <td>{props.titleProperty}</td>
      <td>
        {isEditing ? (
          <input
            type="date"
            name="checkInDate"
            value={dataEditing.checkInDate}
            onChange={handleChange}
          />
        ) : (
          dataEditing.checkInDate
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            name="checkOutDate"
            value={dataEditing.checkOutDate}
            onChange={handleChange}
          />
        ) : (
          dataEditing.checkOutDate
        )}
      </td>
      <td>
        {isEditing ? (
          <button className="edit-btn" onClick={SaveEdition}>
            &#128190;
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEdition}>
            &#9998;
          </button>
        )}
        <button className="delete-btn" onClick={props.handleDelete}>
          &#128465;
        </button>
      </td>
    </tr>
  );
};

export default List;
