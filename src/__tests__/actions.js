import * as c from '../constants';
import * as actions from '../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let test = async function() {}

describe('actions', () => {
    it('should create an action to get movies', () => {
        const json = {}
        const expectedAction = {
            type: actions.GET_MOVIES,
            json,
            term: 'some term',
            page: 4
        }
        expect(actions.getMovies(json, 4, 'some term')).toEqual(expectedAction)
    })

    it('should create a FETCHING action', () => {
        const json = {}
        const expectedAction = {
            type: actions.FETCHING,
            isFetching: false
        }
        expect(actions.fetching()).toEqual(expectedAction);
        expectedAction.isFetching = true;
        expect(actions.fetching(true)).toEqual(expectedAction);
    })

    it('should create an action to pop a message', () => {
        const text = 'message';
        const expectedAction = {
            type: actions.MESSAGE,
            text
        }
        expect(actions.message(text)).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates FETCHING / GET_MOVIES / FETCHING actions when fetching movies', () => {
        fetchMock
            .getOnce(`begin:${c.API}`, { body: { Response: "True" } })


        const expectedActions = [
            { type: actions.FETCHING, isFetching: true },
            { type: actions.GET_MOVIES, json: { Response: "True" }, page: 2, term: 'test' },
            { type: actions.FETCHING, isFetching: false }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(actions.fetchMovies('test', 2)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates FETCHING / MESSAGE / FETCHING actions when the api return an error', () => {
        fetchMock
            .getOnce(`begin:${c.API}`, { body: { Response: "False", Error: 'some error text' } })


        const expectedActions = [
            { type: actions.FETCHING, isFetching: true },
            { type: actions.MESSAGE, text: 'some error text' },
            { type: actions.FETCHING, isFetching: false }
        ]
        const store = mockStore({ movies: [] })

        return store.dispatch(actions.fetchMovies('test', 2)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})