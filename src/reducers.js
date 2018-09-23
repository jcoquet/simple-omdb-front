import { combineReducers } from 'redux'
import {
    GET_MOVIES,
    FETCHING,
    MESSAGE,
    GET_MOVIE,
    UNSET_MOVIE,
    BOOKMARK_ADD,
    BOOKMARK_REMOVE
} from './actions'
import filter from 'lodash/filter'

export function movies(state = {}, action) {
    switch (action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, action.json.Search)
        case MESSAGE:
            return {}
        default:
            return state
    }
}

export function movie(state = null, action) {
    switch (action.type) {
        case GET_MOVIE:
            return Object.assign({}, state, action.json)
        case UNSET_MOVIE:
            return null
        default:
            return state
    }
}

export function ui(state = { isFetching: false, totalResults: 0, currentPage: 1, term: '', message: '' }, action) {
    switch (action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, { totalResults : action.json.totalResults, currentPage: action.page, term: action.term, message: '' });
        case FETCHING:
            return Object.assign({}, state, { isFetching : action.isFetching });
        case MESSAGE:
            return Object.assign({}, state, { message : action.text, totalResults: 0, currentPage: 1 });
        default:
            return state
    }
}

// Try to get bookmarked heroes from session storage
let initialBookmarks = []
try {
    initialBookmarks = sessionStorage.getItem('bookmarks')? JSON.parse(sessionStorage.getItem('bookmarks')) : [];
} catch(e) {
    initialBookmarks = [];
}

export function bookmarks(state = initialBookmarks, action) {
    switch (action.type) {
        case BOOKMARK_ADD:
            let addedState = [...state, action.movie]; // add the hero to the state
            sessionStorage.setItem('bookmarks', JSON.stringify(addedState)); // update session storage
            return addedState;
        case BOOKMARK_REMOVE:
            let removedState = filter(state, function (o) { return o.imdbID !== action.id; }); // remove by id, thanks lo :)
            sessionStorage.setItem('bookmarks', JSON.stringify(removedState)); // update session storage
            return removedState;
        default:
            return state;
    }
}

const omdbApp = combineReducers({
    movies,
    ui,
    movie,
    bookmarks
})

export default omdbApp