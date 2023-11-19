import React from "react";

export default function headerTable(props) {
  return (
    <form action="">
      <div className="searchSectionTwo">
        <input
          type="text"
          placeholder="Search by first name"
          name="filterValue"
          value={props.searchFilter}
          onChange={(e) => props.setSearchFilter(e.target.value)}
        />
        <button className="searchButton">&#128269;</button>
      </div>
      <button className="addButton">
        Add <span>&#43;</span>
      </button>
    </form>
  );
}
