import { movies, ui } from '../reducers';
import { GET_MOVIES, MESSAGE, FETCHING } from '../actions';

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(
            { }
        )
    })

    it('should add movies to the store', () => {
        expect(movies( {
            0: { title: "Alceste à bicyclette" },
            1: { title: "Au revoir là-haut" }
        }, {
            type: GET_MOVIES,
            json: {
                Search: [
                    { title: "Normandie nue" },
                    { title: "The shape of water" }
                ]
            }
        })).toEqual(
            {
                0: { title: "Normandie nue" },
                1: { title: "The shape of water" }
            }
        )
    })

    it('should reset the store', () => {
        expect(movies({
            0: { title: "Normandie nue" },
            1: { title: "The shape of water" }
        }, {
            type: MESSAGE
        })).toEqual(
            {}
        )
    })
})

describe('ui reducer', () => {
    it('should return the initial state', () => {
        expect(ui(undefined, {})).toEqual(
            { isFetching: false, totalResults: 0, currentPage: 1, term: '', message: '' }
        )
    })

    it('should set all params related to the pager', () => {
        expect(ui( {}, {
            type: GET_MOVIES,
            json: { totalResults: 324 },
            page: 3,
            term: 'A movie title'
        })).toEqual(
            {
                totalResults: 324,
                currentPage: 3,
                term: 'A movie title',
                message: ''
            }
        )
    })

    it('should switch the fetching state', () => {
        expect(ui( {}, {
            type: FETCHING,
            isFetching: true
        })).toEqual(
            {
                isFetching: true
            }
        )
        expect(ui( {}, {
            type: FETCHING,
            isFetching: false
        })).toEqual(
            {
                isFetching: false
            }
        )
    })

    it('should set a message and reset the pager', () => {
        expect(ui( { totalResults: 412, currentPage: 12 }, {
            type: MESSAGE,
            text: 'A new message'
        })).toEqual(
            {
                message: 'A new message',
                totalResults: 0,
                currentPage: 1
            }
        )
    })
})