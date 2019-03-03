import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
 } from './constants.js';

const initialStateSearch = {
    searchField: '',
    
}

const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload }); //return a new state with whatever the user has entered
            // return { ...state, searchField: action.apyload}
        default:
            return state;
    }
} 

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false }
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}