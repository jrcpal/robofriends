// Reducers are pure functions that take the previous state and an action, and return the next state.


import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "./constants";


const initialStateSearch = { 
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => { 
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

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false}
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false}
        default:
            return state;
    }
}