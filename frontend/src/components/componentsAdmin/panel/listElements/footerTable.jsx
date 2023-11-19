import React from "react";

export default function footerTable(props) {
  return (
    <div className="pagination">
      <p>{`Total : ${props.totalElements}`}</p>
      <button onClick={props.prevPage}>&lt;</button>
      <button onClick={props.nextPage}>&gt;</button>
    </div>
  );
}
