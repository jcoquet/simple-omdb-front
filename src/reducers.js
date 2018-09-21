import { combineReducers } from 'redux'
import {
    GET_MOVIES,
    FETCHING,
    MESSAGE,
    GET_MOVIE,
    UNSET_MOVIE
} from './actions'

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

const omdbApp = combineReducers({
    movies,
    ui,
    movie
})

export default omdbApp