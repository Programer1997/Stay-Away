import React, { useState } from "react";
//import { format } from "date-fns";

const List = (props) => {
  const initialValues = {
    _id: props.idValue,
    address: props.address,
    city: props.city,
    price: props.price,
    userName: props.userName,
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
            name="address"
            value={dataEditing.address}
            onChange={handleChange}
          />
        ) : (
          dataEditing.address
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="city"
            value={dataEditing.city}
            onChange={handleChange}
          />
        ) : (
          dataEditing.city
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="price"
            value={dataEditing.price}
            onChange={handleChange}
          />
        ) : (
          dataEditing.price
        )}
      </td>
      <td>{dataEditing.userName}</td>
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
