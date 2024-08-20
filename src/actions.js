// the action, classed setSearchField, takes in a text parameter and returns an object with a type and payload property. The payload is the text that was passed in. The type is a string that describes the action that was taken. In this case, the type is 'CHANGE_SEARCH_FIELD'.

import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = (text) => ({ 
    type: CHANGE_SEARCH_FIELD,
    payload: text
});