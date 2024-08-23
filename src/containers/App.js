import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { requestRobots, setSearchField } from "../actions"; 

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.request.error);
  const isPending = useSelector((state) => state.request.isPending);  
  const robots = useSelector((state) => state.request.robots);  
  const searchField = useSelector((state) => state.search.searchField);  


  useEffect(() => {
    dispatch(requestRobots());  // Dispatch action to fetch robots
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchChange = (value) => {
    dispatch(setSearchField(value));  // Dispatch action to update Redux state
  };

  return isPending ? (
    <h1 className="tc f1" style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}>
      Loading...
    </h1>
  ) : (
    <div className="tc">
      <h1 className="f1" style={{ fontFamily: "Impact, Charcoal, cursive, sans-serif" }}>
        ROBOFRIENDS
      </h1>
      <SearchBox handleSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
