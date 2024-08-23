// the action, classed setSearchField, takes in a text parameter and returns an object with a type and payload property. The payload is the text that was passed in. The type is a string that describes the action that was taken. In this case, the type is 'CHANGE_SEARCH_FIELD'.

import * as constants from "./constants.js";

export const setSearchField = (text) => {
  return {
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestRobots = () => (dispatch) => {
    // This function takes in dispatch to allow for asynchronous actions.
    // It can dispatch multiple actions, such as indicating a request is pending,
    // and later dispatching success or failure actions based on the result.
    dispatch({ type: constants.REQUEST_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: constants.REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: constants.REQUEST_ROBOTS_FAILED, payload: error }));
  };