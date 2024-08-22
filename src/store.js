import { configureStore } from "@reduxjs/toolkit";
import { searchRobots } from "./reducers";

const store = configureStore({
  reducer: {
    search: searchRobots, // Register your reducer
  },
});

export default store;
