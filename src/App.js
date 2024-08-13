import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

export default function App() {
  const [searchInput, setSearchInput] = useState("");

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="tc">
      <h1 className='f1' style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}>
        ROBOFRIENDS
      </h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}
