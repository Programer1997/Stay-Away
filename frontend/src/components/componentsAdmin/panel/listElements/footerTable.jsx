import React from "react";

export default function footerTable(props) {
  return (
    <div className="pagination">
      <p>{`Total : ${props.totalElements}`}</p>
      <button>&lt;</button>
      <button>&gt;</button>
    </div>
  );
}
