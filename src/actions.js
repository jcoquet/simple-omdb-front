import * as c from './constants';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

/*
 * action types
 */

export const GET_MOVIES = 'GET_MOVIES';
export const FETCHING = "FETCHING";
export const MESSAGE = "MESSAGE";
export const GET_MOVIE = "GET_MOVIE";
export const UNSET_MOVIE = "UNSET_MOVIE";
export const BOOKMARK_ADD = "BOOKMARK_ADD";
export const BOOKMARK_REMOVE = "BOOKMARK_REMOVE";

/* Fetch movies */
export function fetchMovies(needle, page = 1) {
    return dispatch => {

        dispatch(fetching(true));

        return fetch(`${c.API}?s=${needle}&${c.API_KEY_PARAM}=${c.API_KEY}&${c.API_PAGE_PARAM}=${page}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.Response === 'True') { // je pars du principe que si dans la réponse json il y a { Response: "true" } alors il y a des résultats
                    dispatch(getMovies(json, page, needle));
                } else { // dans le cas contraire il doit s'agir d'un message d'erreur qui sera affiché
                    dispatch(message(json.Error));
                }
            })
            .then(() => dispatch(fetching()));
    }
}

/* GET_MOVIES action */
// les paramètre term/page seront stockés dans store.ui pour la pagination
export function getMovies(json, page, term) {
    return { type: GET_MOVIES, json, page, term };
}

/* Fetch a movie by ID */
export function fetchMovie(id) {
    return dispatch => {

        dispatch(fetching(true));
        
        return fetch(`${c.API}?${c.API_ID_PARAM}=${id}&${c.API_KEY_PARAM}=${c.API_KEY}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.Response === 'True') { // je pars du principe que si dans la réponse json il y a { Response: "true" } alors il y a des résultats
                    dispatch(getMovie(json));
                } else { // dans le cas contraire il doit s'agir d'un message d'erreur qui sera affiché
                    dispatch(message(json.Error));
                }
            })
            .then(() => dispatch(fetching())); //always hide the loader
    }
}

/* GET_MOVIE action */
export function getMovie(json) {
    return { type: GET_MOVIE, json }
}

/* Remove the current movie from the state
This allow to clean the single view */
export function unsetCurrentMovie() {
    return { type: UNSET_MOVIE }
}

/* Display error message from the api */
export function message(text) {
    return { type: MESSAGE, text };
}

/* Fetching status
used around async action
isFetching : true|false */
export function fetching(isFetching = false) {
    return {
        type: FETCHING,
        isFetching
    };
}

/* Add a movie to the bookmarks
movie : movie json to add */
export function addBookmark(movie) {
    return {
        type: BOOKMARK_ADD,
        movie
    }
}

/* Remove from the bookmarks
id : id of the movie to remove */
export function removeBookmark(id) {
    return {
        type: BOOKMARK_REMOVE,
        id
    }
}