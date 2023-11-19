import React from "react";

export default function headerTable() {
  return (
    <form action="">
      <div className="searchSectionTwo">
        <input type="text" placeholder="Search by first name" />
        <button className="searchButton">&#128269;</button>
      </div>
      <button className="addButton">
        Add <span>&#43;</span>
      </button>
    </form>
  );
}
