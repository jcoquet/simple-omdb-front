// Render a button to toggle the bookmark

import React from 'react'
import { connect } from 'react-redux'
import { addBookmark, removeBookmark } from '../../actions'
import findIndex from 'lodash/findIndex'
import { MAX_BOOKMARKS } from '../../constants'

export const View = ({ bookmark, handleBookmark, canBookmark, movie }) => (
  <div className="bookmark-switch">
    { canBookmark && !bookmark && <span className="state on" onClick={() => handleBookmark(movie, bookmark)}><span className="label">bookmark this</span></span> }
    { bookmark && <span className="state off" onClick={() => handleBookmark(movie, bookmark)}><span className="label">remove from bookmarks</span></span> }
  </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        movie: ownProps.movie, // pass the wohle movie
        bookmark: findIndex(state.bookmarks, ['imdbID', ownProps.movie.imdbID]) !== -1, // already bookmarked ?
        canBookmark: state.bookmarks.length < MAX_BOOKMARKS // toggle the button if we reach the limit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleBookmark: (movie, bookmarkStatus) => {
            if (bookmarkStatus) { // dispatch the add or remove action depending on the bookmark status
                dispatch(removeBookmark(movie.imdbID));
            } else {
                dispatch(addBookmark(movie));
            }
        }
    }
}

const Switch = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default Switch