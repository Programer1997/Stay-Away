import React from "react";

export default function HeaderTable(props) {
  return (
    <form action="">
      <div className="searchSectionTwo">
        <input
          type="text"
          placeholder="Search by City"
          name="filterValue"
          value={props.searchFilter}
          onChange={(e) => props.setSearchFilter(e.target.value)}
        />
        {/*<button className="searchButton">&#128269;</button>*/}
      </div>
    </form>
  );
}
