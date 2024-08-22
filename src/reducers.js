// Reducers are pure functions that take the previous state and an action, and return the next state.

import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = { 
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => { 
    //console.log('searchRobots', action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // Object.assign() is used to copy the state object and return a new object with the updated searchField property.
            //return Object.assign({}, state, {searchField: action.payload});
            // can also be written as:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}