import { configureStore } from "@reduxjs/toolkit";
import { requestRobots, searchRobots } from "./reducers";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const logger = createLogger();

const rootReducer = {
  search: searchRobots,
  request: requestRobots,
};

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Add middleware to the store
  // getDefaultMiddleware() returns an array of default middleware
  // concat(thunk, logger) adds thunk and logger middleware to the default middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
