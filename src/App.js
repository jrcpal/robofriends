import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  return !robots.length ? (
    <h1
      className="tc f1"
      style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}
    >
      Loading...
    </h1>
  ) : (
    <div className="tc">
      <h1
        className="f1"
        style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}
      >
        ROBOFRIENDS
      </h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
