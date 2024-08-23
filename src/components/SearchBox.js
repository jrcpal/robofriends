import React from "react";

export default function SearchBox({handleSearchChange}) {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </div>
  );
}
