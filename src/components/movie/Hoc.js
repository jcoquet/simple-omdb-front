import { connect } from 'react-redux'
import View from './View'
import { fetchMovie, unsetCurrentMovie } from '../../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        movieId: ownProps.match.params.id,
        movie: state.movie,
        message: state.ui.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieById: function(movieId) {
            dispatch(fetchMovie(movieId));
        },
        unsetCurrentMovie: function() {
            dispatch(unsetCurrentMovie());
        }
    }
}

const Movie =  withRouter( connect(
    mapStateToProps,
    mapDispatchToProps
)(View) )

export default Movie