import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions"; 

export default function App() {
  const [robots, setRobots] = useState([]);
  const searchField = useSelector((state) => state.search.searchField);  // Access Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleSearchChange = (value) => {
    dispatch(setSearchField(value));  // Dispatch action to update Redux state
  };

  return !robots.length ? (
    <h1 className="tc f1" style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}>
      Loading...
    </h1>
  ) : (
    <div className="tc">
      <h1 className="f1" style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}>
        ROBOFRIENDS
      </h1>
      <SearchBox onSearchChange={handleSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
