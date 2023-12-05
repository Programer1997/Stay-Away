import React, { useState } from "react";
import { format } from "date-fns";

const List = (props) => {
  const date1 = new Date(props.checkIn);
  const formattedDate1 = format(date1, "yyyy-MM-dd");
  const date2 = new Date(props.checkOut);
  const formattedDate2 = format(date2, "yyyy-MM-dd");

  const initialValues = {
    _id: props.idValue,
    userName: props.userName,
    rol: " ",
    property: props.titleProperty,
    checkIn: formattedDate1,
    checkOut: formattedDate2,
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
      <td>
        {isEditing ? (
          <input
            type="text"
            name="userName"
            value={dataEditing.userName}
            onChange={handleChange}
          />
        ) : (
          props.userName
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="rol"
            value={dataEditing.rol}
            onChange={handleChange}
          />
        ) : (
          " "
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="property"
            value={dataEditing.property}
            onChange={handleChange}
          />
        ) : (
          props.titleProperty
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            name="checkIn"
            value={dataEditing.checkIn}
            onChange={handleChange}
          />
        ) : (
          dataEditing.checkIn
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            name="checkOut"
            value={dataEditing.checkOut}
            onChange={handleChange}
          />
        ) : (
          dataEditing.checkOut
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
