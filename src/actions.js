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

/* Fetch movies */
export function fetchMovies(needle, page = 1) {
    return dispatch => {

        dispatch(fetching(true));

        return fetch(`${c.API}?s=${needle}&${c.API_KEY_PARAM}=${c.API_KEY}&${c.API_PAGE_PARAM}=${page}`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                if (json.Response === 'True') { // j pars du principe que si dans la réponse json il y a { Response: "true" } alors il y a des résultats
                    dispatch(getMovies(json, page, needle));
                } else { // dans le cas contraire il doit s'gir d'un message d'erreur qui sera afficher
                    dispatch(message(json.Error));
                }
            })
            .then(() => dispatch(fetching()));
    }
}

/* GET_CHARACTERS action */
// les paramètre term/page seront stockés dans store.ui pour la pagination
export function getMovies(json, page, term) {
    return { type: GET_MOVIES, json, page, term };
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