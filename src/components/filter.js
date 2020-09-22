import React from "react";

function filter({ filter }) {
  return (
    <div className="filter_form">
      <p>{filter.name}</p>
      <div className="select">
        <select>
          {filter.options.map((options) => {
              return <option>{options.option}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default filter;
