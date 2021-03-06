import { connect } from 'react-redux'
import View from './View'
import { fetchMovies } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: needle => {
            dispatch(fetchMovies(needle));
        }
    }
}

const SearchBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default SearchBox